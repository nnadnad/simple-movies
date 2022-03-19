const { expect, assert } = require('chai');
const movieController = require('../controller/movie-controller');


describe('Test Movie Controller', () =>{
    describe('Expect test', () =>{
        it('it should have object movies', ()=>{
            const list = movieController.listMovie();
            expect(list).to.be.an('array').and.is.ok;
            expect(list).to.have.lengthOf.at.least(1);
            expect(list[0]).to.be.an('object').and.is.ok;
            expect(list[0]).to.have.property('name');
        });
    });

    describe('Assert test', () =>{
        it('it should have object movies', ()=>{
            const list = movieController.listMovie();
            assert.isArray(list, 'is Array');
            assert.isObject(list[0]);
            assert.property(list[0], 'name');
            assert.typeOf(list[0].name, 'string');
            assert.typeOf(list[0].id, 'number');
        });
    });
});