app.factory("<%= factoryName %>", ['$http', '$q','RESOURCE', function ($http, $q,RESOURCE) {
	var object = {
	    functionName: function () {
	        return variable;
	    }

	};
	return object;
}]);