var frameModule = require("ui/frame");
var viewModule=require("ui/core/view");
var UserViewModel = require("../../shared1/view-models/user-view-model");
var dialogsModule=require("ui/dialogs");
var user = new UserViewModel({
 email: "sharma171128",
    password: "deep"
});
var email;


exports.deepak=function(args){
    var page=args.object;
    page.bindingContext=user;
    //email=viewModule.getViewById(page,"email");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    //console.log(email.text);
}

exports.signIn = function() {
    user.login()
        .catch(function(error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            enableForm();
            return Promise.reject();
        })
        .then(enableForm)
        .then(function() {
            frameModule.topmost().navigate("views/list/list");
        });
};
exports.Registering=function(){
    var topmost=frameModule.topmost();
    topmost.navigate("Register");
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        