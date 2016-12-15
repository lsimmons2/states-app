
var util = 'util'
var fs = require('fs');
var request = require('supertest');
var chai = require('chai');
var app = require('../../dist/server/index.js');

var should = chai.should();
var agent = request.agent(app);


describe('Massachusetts', () => {
  it('should have the right number of munis', (done) => {
    agent
      .get('/states/Massachusetts')
      .expect(200)
      .end( (err, res) => {
        res.body.length.should.equal(351)
        done();
      })
  })
});

describe('Connecticut', () => {
  it('should have the right number of munis', (done) => {
    agent
      .get('/states/Connecticut')
      .expect(200)
      .end( (err, res) => {
        res.body.length.should.equal(169)
        done();
      })
  })
});

describe('Vermont', () => {
  it('should have the right number of munis', (done) => {
    agent
      .get('/states/Vermont')
      .expect(200)
      .end( (err, res) => {
        res.body.length.should.equal(242)
        done();
      })
  })
});

describe('Maine', () => {
  it('should have the right number of munis', (done) => {
    agent
      .get('/states/Maine')
      .expect(200)
      .end( (err, res) => {
        res.body.length.should.equal(433)
        done();
      })
  })
});

describe('Rhode Island', () => {
  it('should have the right number of munis', (done) => {
    agent
      .get('/states/Rhode%20Island')
      .expect(200)
      .end( (err, res) => {
        res.body.length.should.equal(39)
        done();
      })
  })
});

describe('New Hampshire', () => {
  it('should have the right number of munis', (done) => {
    agent
      .get('/states/New%20Hampshire')
      .expect(200)
      .end( (err, res) => {
        res.body.length.should.equal(234)
        done();
      })
  })
});
