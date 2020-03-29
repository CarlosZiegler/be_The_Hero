const connection = require('../database/connection')

module.exports={
    async store( req, res) {
    
       const { email } = req.body
       
       const ong = await connection('ongs')
        .where('email', email)
        .select('name', 'id')
        .first()

        if (!ong){
            return res.status(400).json({
                error: 'No ONG found with this Email'
            })
        }

        return res.json(ong)
    }
    
}