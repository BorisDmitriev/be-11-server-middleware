const request = require('supertest');
const { app, server } = require('../server');

afterAll(done => {
    server.close(done);
  });

let mockUser = {
    "firstName": "john",
    "lastName": "stevenson",
    "age": "129",
    "fbw": "36",
    "profession": "Musician",
    "favoriteBands": ["Radiohead", "Motorhead", "Machinehead", "The talking heads"],
    "email": "steve@steve.com"
}

describe("/validateuser, POST Endpoint", () => {
    it("POST to /validateuser", async () => {
        const res = await request(app).post('/validateuser').send(mockUser)
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.message).toBeTruthy();
    })
})

describe("/sanitizeuser, POST endpoint", () => {
    it("POST to /sanitizeuser", async () => {
        const res = await request(app).post('/sanitizeuser').send(mockUser);
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.firstName[0]).toBe(res.body.firstName[0].toUpperCase());
        expect(res.body.lastName[0]).toBe(res.body.lastName[0].toUpperCase());
        expect(res.body.age).toBe(parseInt(res.body.age));
        expect(res.body.favoriteBands).toEqual(expect.arrayContaining(res.body.favoriteBands.sort()));
    });
});