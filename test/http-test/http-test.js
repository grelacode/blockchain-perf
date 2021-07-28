'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../../src/app')
const { SUCCESS, NOT_FOUND, UNPROCESSABLE_ENTITY } = require('../../src/constants/httpCodes');

chai.use(chaiHttp);

describe('Passing JSON user message: ',()=>{
    it('should response succeed message', (done) => {
        chai.request(app)
            .post('/block')
            .send({user_message: "Hello World"})
            .end( function(err,res){
                expect(res).to.have.status(SUCCESS);
                done();
            });
    });
});

describe('Passing JSON with undefined user message: ',()=>{
    it('should receive a Unprocessable_Entity error', (done) => {
        chai.request(app)
            .post('/block')
            .send({user_message: undefined})
            .end( function(err,res){
                expect(res).to.have.status(UNPROCESSABLE_ENTITY);
                done();
            });
    });
});

describe('Fetching wrong URL: ',()=>{
    it('should receive a Not_Found code', (done) => {
        chai.request(app)
            .post('/')
            .send({user_message: "Hello World"})
            .end( function(err,res){
                expect(res).to.have.status(NOT_FOUND);
                done();
            });
    });
});




