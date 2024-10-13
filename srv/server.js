const cds = require("@sap/cds");
const cov2ap = require("@sap/cds-odata-v2-adapter-proxy");

cds.on("bootstrap", (app) => {
    app.use(cov2ap());
    app.use((req, res, next) => {

     
        // if ((req.path.includes('user_information'))) {
        //     if (!(req.headers['authorization'] == undefined)) {
        //         let creadentials  = Buffer.from(req.headers['authorization'].split(" ")[1],'base64').toString().split(":")
        //         if(creadentials[0]=="saiteja" && creadentials[1] == "101010")
        //         {
        //             next();
        //         }
        //         else{
        //             console.log("unauthorized")
        //         }
        //     } else {
        //         next();
        //     }
           
        // }
        next();
    });


});

// Start CDS server
module.exports = cds.server;
