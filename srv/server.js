const cds = require("@sap/cds");
const cov2ap = require("@sap/cds-odata-v2-adapter-proxy");

cds.on("bootstrap", (app) => {
    app.use(cov2ap());
    app.use( async (req, res, next) => {
     
        if ((req.path.includes('user_information'))) {
            if (!(req.headers['authorization'] == undefined)) {
                let creadentials  = Buffer.from(req.headers['authorization'].split(" ")[1],'base64').toString().split(":")
                let get_data =  await cds.run(`select * from APP_DB_USER_DATA`)

                console.log(get_data)
                if(!(creadentials[0]=="saiteja" && creadentials[1] == "101010"))
                {
                    res.status(401).json({ error: "Unauthorized access" });
                }
                else{
                    next();
                }
            } else {
                next();
            }
           
        }
        else {
            next();
        }
      
    });


});

// Start CDS server
module.exports = cds.server;
