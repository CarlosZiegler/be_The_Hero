const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueID')


module.exports={
    async store( req, res) {
        const { id, name, email, whatsapp, city, uf } = req.body
        console.log(req.body)
        //const id = generateUniqueId()

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return res.json( { id })
    },
    async index (req, res) {
        const ongs = await connection('ongs').select('*')
        return res.json( ongs )
    }
}