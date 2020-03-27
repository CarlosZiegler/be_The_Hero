const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Ong', () => {

    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll( async () => {
        await connection.destroy()
    })

    it('should be able to create new ONG', async () => {
       const response = await request(app).post('/ongs').send({
        name:"Berlim Animals",
        email:"carlosziegler@gmail.com",
        whatsapp:"12091029102901290",
        city:"Berlin",
        uf:"de"
        })

        expect(response.body).toHaveProperty('id')
    })


    


})