var frameModule=require("ui/frame");

exports.onSubmit=function(){
	var topmost=frameModule.topmost();
	topmost.navigate("main-page");
}