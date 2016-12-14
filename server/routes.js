
import express from 'express';


const pgp = require('pg-promise')();

let cn = {
    database: 'states'
};

const db = pgp(cn);


function getState(req, res){
  let queryString = `SELECT * FROM munis WHERE state='${req.params.state}'`;
  db.any(queryString)
    .then( data => {
      res.status(200).send(data);
    })
    .catch( err => {
      console.error('herrrrre', err);
      res.status(500).send(err)
    })
}

const router = express.Router();

router.route('/:state')
  .get((req, res) => {
    console.log(req.method, req.url);
    return getState(req, res);
  })

export default router
