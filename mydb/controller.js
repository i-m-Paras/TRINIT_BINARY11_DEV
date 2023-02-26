const signin_schema=require('./signin_schema');

module.exports ={
    create: async(req,res) =>{

        const {name,email,password}= req.body;
        const signin=await signin_schema.create({
            name,
            email,
            password
        });
        return res.send(signin);
    }
}