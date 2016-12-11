import express from 'express';
import mongo from 'mongodb';

const mongoClient = mongo.MongoClient;

function getState(req, res){
  mongoClient.connect('mongodb://localhost:27017/states', (err, db) => {
    if(err){
      return res.send(err);
    }
    let insensitiveState = new RegExp(req.params.state, 'i');
    db.collection('munis').find({state: insensitiveState}).toArray((err, results) => {
      return res.send(results);
    })
  })
}


const router = express.Router();

router.route('/:state')
  .get((req, res) => {
    return getState(req, res);
  })

export default router
