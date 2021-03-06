const axios = require('axios');
const db = require('../../db');


exports.index = (req, res) => {
  db.collection('Cohorts')
    .get()
    .then(snapshot =>
        snapshot.docs.map( doc => {
          return {...doc.data(), id: doc.id}
        })
      )
    .then(data => {
      res.json({data});
    })
    .catch(err => console.error('Getting cohorts data error:, ', err));
}

exports.cohort = (req, res) => {
  db.collection('Cohorts')
    .doc(req.params.id)
    .get()
    .then( doc => res.json(doc.data()))
    .catch( err => console.error('Getting cohort data error:, ', err));
}