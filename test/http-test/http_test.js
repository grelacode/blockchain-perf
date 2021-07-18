'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../../src/app')

chai.use(chaiHttp);

describe('Passing JSON user message: ',()=>{
    it('should response succeed message', (done) => {
        chai.request(app)
            .post('/block')
            .send({usermessage: "Hello World"})
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('Passing JSON without user message: ',()=>{
    it('should receive an error', (done) => {
        chai.request(app)
            .post('/block')
            .send({usermessage: undefined})
            .end( function(err,res){
                expect(res).to.have.status(500);
                done();
            });
    });
});


