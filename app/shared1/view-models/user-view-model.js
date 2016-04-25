var config = require("../../shared1/config");
var Observable = require("data/observable").Observable;

viewModel.login = function() {
    return fetchModule.fetch(config.apiUrl + "oauth/token", {
        method: "POST",
        body: JSON.stringify({
            username: viewModel.get("email"),
            password: viewModel.get("password"),
            grant_type: "password"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(handleErrors)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        config.token = data.Result.access_token;
    });
};