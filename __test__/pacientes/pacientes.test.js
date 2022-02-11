const app = require('../../app');
const supertest = require('supertest');

describe('Test suite de api v2 paceintes endpoint',  () =>{
    
    it('GET /api/v1/pacientes',async()=>{
        await supertest(app).get('/api/v1/pacientes')
        .set({apitoken:'2d0cd27f-e0a6-4f36-83db-a33359fb3779'})
        .expect(200);
    });
})