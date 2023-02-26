const Staff=require('./staffmodel');

module.exports ={
    create: async(req,res) =>{

        const {name, email}= req.body;
        const staff =await Staff.create({
            name,
            email
        });
        return res.send(staff);
    }
}