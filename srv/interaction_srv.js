


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
         
            let get_data = await cds.run(SELECT.from("APP_MYTABLES_USER_DATA"))

            let filteredata = get_data.filter(i=> i.NAME == 'teja')

            console.log(filteredata)
            
            
        } catch (error) {
            console.log(error)
        }
    })

}


