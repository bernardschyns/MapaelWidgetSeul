
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
	var obj = {        legend: {
            plot: {
                title: "American cities",
                slices: [{
                    label: "Value 1",
                    sliceValue: "Value 1",
                    type : "svg",
                    path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                    width: 30,
                    height: 30,
                    attrs :{
                        fill : "#8AD12C"
					}
                }, {
                    label: "Value 2",
                    sliceValue: "Value 2",
                    type : "svg",
                    path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                    width: 30,
                    height: 30,
                    attrs :{
                        fill : "#D12C2C"
					}
                }]
            }
        }};
var myobj = JSON.parse(JSON.stringify(obj));
sources.cartes.carteLegend=myobj;
sources.cartes.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
