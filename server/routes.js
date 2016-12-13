
import express from 'express';
import pg from 'pg';

let config = {
  database: 'states',
  max: 10,
  idleTimeoutMillis: 30000
};

let pool = new pg.Pool(config);

function getState(req, res){
  pool.connect( (err, client, done) => {

    if (err) {
      done();
      console.error('error connecting to postgres: ', err);
      return res.status(500).send();
    }

    let results = [];
    let queryString = `SELECT * FROM munis WHERE state='${req.params.state}'`;
    client.query(queryString, (err, results) => {
      if (err) {
        return res.status(500).send(err)
      }
      return res.status(200).send(results);
    })
  })
}


const router = express.Router();

router.route('/:state')
  .get((req, res) => {
    console.log(req.method, req.url);
    return getState(req, res);
  })

export default router
