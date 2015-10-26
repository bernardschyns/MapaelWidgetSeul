WAF.define('MapaelWak', ['waf-core/widget'], function(widget) {

    var MapaelWak = widget.create('MapaelWak', {


        //        /* Create a property */
        test: widget.property({
            bindable: true,
            onChange: function(newValue) {
                //                alert("1" + self);
                //                this.node.innerHTML = this.test(); /* this contains the widget and newValue contains its current value */
            }
        }),

        mapaelDataclass: widget.property({
            type: 'datasource'

        }),
        roles: widget.property({
            type: 'list',
            attributes: ['id', 'name']
        }),
        resources: widget.property({
            type: 'list',
            attributes: ['id', 'name']
        }),



        init: function() {
            //creating the node and starting the 3rd party library
            //making a copy of this
            var self = this,
            traduireOptions=function (Options){
            	};

            // if a dataclass is assigned, get values and render()
            if (this.mapaelDataclass()) {
                this.projectDataAttribute = this.mapaelDataclass.attributeFor(this.mapaelDataclass.attributes()[0].name);
                //                alert("3"+this.projectDataAttribute);
                self.mapaelDataclass().subscribe('currentElementChange', function(e) {
                	            debugger;
                    //c'est ici que nous préparons notre objet params pour Mapael
                    var myCarte=e.data.dataSource.getCurrentElement();
                    //Si la carte n'a jamais été traîtée en base de données par Wakanda
                    if (myCarte.boolWakanded!==true){
                    	// nous allons interpréter les options initiales de Mapael en data
                    	myCarte.carteOptions.value.map.boolWakanded=false;
                    	traduireOptions (myCarte.carteOptions);
                    }
                    //on envoie l'entièreté de l'entité à la fonction repaint
                    this.repaint(myCarte);

                    //			var myCarte="douleur2";	
                    //            this.repaint(myCarte);        	
                }.bind(this));
            }

            //            this.repaint();
            //            /* Define a custom event */
            //            this.fire('myEvent', {
            //                message: 'Hello'
            //            });
        }
    });

    //    /* Map the custom event above to the DOM click event */
    //    MapaelWak.mapDomEvents({
    //        'click': 'action'
    //    });
    MapaelWak.prototype.repaint = function(myCarte) {
//        debugger;
        //comme this (en raison de bind) renvoie à la widget, nous chargeons le HTML
        //nécessaire à celle-ci
        this.node.innerHTML=myCarte.carteHTML.value;
        
        //on va assembler le tableau des options nécessaires pour Mapael
//        var optionsMap = {
//            map: {
//                name: myCarte.carteName.value
//            }
//        };
//        var optionsLegend = myCarte.carteLegend.value;
//        var optionsPlot = myCarte.cartePlot.value;


        var optionsOptions = myCarte.carteOptions.value;
        options = $.extend(true, {}, $.fn.mapael.defaultOptions, optionsOptions);        
//        options = $.extend(true, {}, $.fn.mapael.defaultOptions, optionsMap);
//        options = $.extend(true, options,optionsLegend , optionsMap,optionsPlot);
        

        //        $(".mapcontainer").css("border-top-width", "10px");
//        $(".mapcontainer").mapael(optionsMap)
        $(".mapcontainer").mapael(optionsOptions)
        
        //        this.node.innerHTML = "Aurevoir";
    };


    return MapaelWak;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3871.html */