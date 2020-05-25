const mongoose = require('mongoose')

const Number = mongoose.model('Number')

module.exports={
   
    async show(req,res){
         const {page = 1} = req.query
        const numbs = await Number.paginate({},{page,limit:6})
        
        return res.json(numbs)
    },

    async store(req,res){
        const {numero}= req.body
        var type=''
        if(numero < 10){
            type='Não urgente'
        }
        if( numero>11 && numero>20){
            type='Pouco urgente'
        }
        if( numero>21 && numero>30){
            type='Media urgencia'
        }
        if( numero>31 && numero>40){
           type='Alta urgencia'
        }
        if( numero>41 && numero>50){
            type='Emergencia'
        }
        
       
        const number = await Number.create({
                numero,
                tipo:type
        })
       
        
        return res.json(number)
    },

}
