
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var obj = {plots: {
			'ny' : {
				latitude: 40.717079,
				longitude: -74.00116,
				tooltip: {content : "New York"},
                value: "Value 1"
			},
			'an' : {
				latitude: 61.2108398, 
				longitude: -149.9019557,
				tooltip: {content : "Anchorage"},
                value: "Value 2"
			},
			'sf' : {
				latitude: 37.792032,
				longitude: -122.394613,
				tooltip: {content : "San Francisco"},
                value: "Value 1"
			},
			'pa' : {
				latitude: 19.493204,
				longitude: -154.8199569,
				tooltip: {content : "Pahoa"},
                value: "Value 2"
			},
            'la' : {
				latitude: 34.025052,
				longitude: -118.192006,
				tooltip: {content : "Los Angeles"},
                value: "Value 1"
			},
            'dallas' : {
				latitude: 32.784881,
				longitude: -96.808244,
				tooltip: {content : "Dallas"},
                value: "Value 2"
			},
            'miami' : {
				latitude: 25.789125,
				longitude:  -80.205674,
				tooltip: {content : "Miami"},
                value: "Value 2"
			},
            'washington' : {
				latitude: 38.905761,
				longitude:  -77.020746,
				tooltip: {content : "Washington"},
                value: "Value 2"
			},
            'seattle' : {
				latitude: 47.599571,
				longitude: -122.319426,
				tooltip: {content : "Seattle"},
                value: "Value 1"
			}
		}};
var myobj = JSON.parse(JSON.stringify(obj));
sources.cartes.cartePlot=myobj;
sources.cartes.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
