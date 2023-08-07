// const { expect } = require('chai');
// const { faker } = require('@faker-js/faker');
// const _ = require('lodash');
// const { Pool } = require('pg');
// const { v4: uuidv4 } = require('uuid');

// const app = require('../../app');

// const request = require('supertest')(app);

// describe('API Integration Test', async () => {
//   let pool;
  
//   before(async () => {

//   });

//   describe('Test register method', async () => {
//     it('should register a user', async () => {
//       const params = {
//         username: faker.internet.userName(),
//         name: faker.person.fullName(),
//         profilePicture: faker.image.url(),
//         password: faker.string.alphanumeric(10),
//       };

//       const res = await request
//         .post('/v1/register')
//         .send(params)
//         .expect('Content-Type', /json/)
//         .expect(200);

//       expect(res.body).to.have.property('data');
//       expect(res.body.data.name).to.equal(params.name);
//     });
//   });
// });