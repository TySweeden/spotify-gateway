import * as config from '../../../static/config.json'

/*
    authorize with clientId >> get access_token
    request refresh token with access_token >> gets access_token and refresh_token
*/

export const getAuthorization = async (authorizationRequest: any = { scopes: "user-read-private user-read-email" }) => {
    console.log("Get Client Access Token");

    var authResponse = undefined;
    var body = "grant_type=client_credentials&scope=" + encodeURIComponent(authorizationRequest.scopes);

    await fetch(config.tokenEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Authorization": "Basic " + Buffer.from(config.clientId + ":" + config.clientSecret).toString("base64")
        },
        body: body
    }).then(async (response) => {
        if (response.status >= 200 && response.status < 300) {
            return await response.json();
        } else {
            throw response;
        }
    }).then(async (response) => {
        console.log(JSON.stringify(response));
        // will not work .. does not set the server request context
        setTimeout(() => {
            getAuthorization();
        }, response.expires_in * 1000);

        authResponse = response;
    }).catch(error => error);

    return <any> authResponse;
}

const getRefreshToken = async (authResponse: any) => {
    console.log("Get Client Refresh Token", authResponse);

    var body = "grant_type=authorization_code&code=" + "some code from /authorize";
    console.log(body)

    await fetch(config.tokenEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Authorization": "Basic " + Buffer.from(config.clientId + ":" + config.clientSecret).toString("base64")
        },
        body: body
    }).then(async (response) => {
        if (response.status >= 200 && response.status < 300) {
            var test = await response.json();
            console.log(test)
            return response.json();
        } else {
            throw response;
        }
    })
        .catch(error => console.log("AUTH ERROR: " + JSON.stringify({ status: error.status, statusText: error.statusText })));
}