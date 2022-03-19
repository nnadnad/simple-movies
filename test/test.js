// process.env.NODE_ENV='test'

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../index');
// let should = chai.should();
// let expect = chai.expect();
// let assert = chai.assert();


// chai.use(chaiHttp);
// describe('Movie Genre', ()=>{

//     describe('/GET genre', ()=>{
//         it('it should GET the genres', (done)=>{
//             // insert db = a, b, c
//              let list = function insert(){};
//              list.save((err, list)=>{
//                 chai.request(server)
//                 .get(`/movie/genre/${list.id}`)
//                 .end((err, res)=>{
//                     if(err) console.log(err);
//                     res.should.have.status(200);
//                     res.body.should.be.a('array');
//                     done();
//                 })
//              })    
//         })
//     });

//     describe('/POST list', ()=>{
//         // it('it not should POST list', (done)=>{
//         //     let list ={
//         //      "name": "List Film Batak1",
//         //      "desc": "Saya adalah seorang gembala sapi1"
//         //    }
//         //      chai.request(server)
//         //          .post('/list')
//         //          .send(list)
//         //          .end((err, res)=>{
//         //              if(err) console.log(err);
//         //              res.should.have.status(201);
//         //              res.body.should.be.a('object');
//         //              res.body.should.be.have.property('errors');
//         //              done();
//         //          })
//         //  })
//         it('it should POST list', (done)=>{
//            let list ={
//             "name": "List Film Baru1",
//             "desc": "Saya adalah seorang gembala sapi3"
//           }
//             chai.request(server)
//                 .post('/list')
//                 .send(list)
//                 .end((err, res)=>{
//                     if(err) console.log(err);
//                     res.should.have.status(200);
//                     res.body.should.be.a('object');
//                     done();
//                 })
//         })
//     })
// })




