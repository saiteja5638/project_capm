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
            let id = {
                JOb_NAME: "test1",
                JOB_ID: '123'
            }
            let new_value = {
                STATUS: "success",
            }
            var response = await service.run(UPDATE("Config_Job_Status").set(new_value).where(id))
            return {
                data:response
            }
            
            
        } catch (error) {
            console.log(error)
        }
    })

}


