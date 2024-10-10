var cds = require('@sap/cds');


module.exports  =  async srv =>{

    srv.before(['CREATE','UPDATE','DELETE'],'user_information', async(req,res)=>{
        try {
            if(req.data.ID=="21121547-d7cb-40a9-99b8-aa87b219486c")
                {
                    req.reject(401,"Your not a Vaild Customer")
                }
        } catch (error) {
            console.log(error)
        }
    })

    srv.on('Get_predication',async(req,res)=>{
        try {
         
            var service = await cds.connect.to('cap_servs');

            var response = await service.tx(req).get("Purchase_Orders")
            console.log(response); 

            return response
            
            
        } catch (error) {
            console.log(error)
        }
    })

}


