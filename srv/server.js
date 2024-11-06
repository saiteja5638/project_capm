const cds = require("@sap/cds");
const cov2ap = require("@sap/cds-odata-v2-adapter-proxy");
const axios = require('axios');
const xsenv = require('@sap/xsenv');

cds.on("bootstrap", (app) => {

    app.use(async (req, res, next) => {
        try {

            await authenticate(req, next);

        }
        catch (error) {
            console.error('Error getting access token:', JSON.stringify(error));
            next();
        }
    });
    app.use(cov2ap());
});

async function authenticate(req, next) {


    if ((req.path.includes('user_information'))) {
        const xsuaaService = xsenv.getServices({
            uaa: {
                name: 'capservsoauth' // Replace with the exact name of the desired service instance
            }
        });
        const clientId = xsuaaService.uaa.clientid;
        const clientSecret = xsuaaService.uaa.clientsecret;
        const tokenUrl = xsuaaService.uaa.url + '/oauth/token';

        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        params.append('client_id', clientId);
        params.append('client_secret', clientSecret);

        console.log(xsuaaService.uaa)

        await axios.post(tokenUrl, params)
            .then(response => {
                const accessToken = response.data.access_token;

                req.headers.authorization = "Bearer " +
                    accessToken;
                next();
            }).catch(error => {
                console.log("Error obtaining access token:", error);
                next();
            });

    }
    else {
        next();
    }


}


// Start CDS server
module.exports = cds.server;
