angular.module("linkify", [])
.filter("linkify", function(){
	return function(input){
		input = input || "";
		return linkifyStr(input);
	};
});
