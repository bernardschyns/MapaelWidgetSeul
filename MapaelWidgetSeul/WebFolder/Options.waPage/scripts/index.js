
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		debugger;
		var obj={
		map : {
			name : "france_departments"
			, zoom: {
				enabled: true,
				maxLevel : 10
			}
			, defaultPlot : {
				attrs : {
					opacity : 0.6
				}
			}
		},
		plots : {
			'paris' : {
				latitude : 48.86, 
				longitude: 2.3444,
                tooltip: {content : "<span style=\"font-weight:bold;\">City :</span> Paris"},
				text : {content : "Paris"}
			},
			'lyon' : {
				latitude :45.758888888889, 
				longitude: 4.8413888888889, 
				tooltip: {content : "<span style=\"font-weight:bold;\">City :</span> Lyon"},
				text : {content : "Lyon"}
			}
		}
	};
	
sources.cartes.carteOptions=obj;
sources.cartes.save();
	
	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
