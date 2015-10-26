//MyRPCmodule.js function
exports.isEmpty = function(param){
	var newEntity,newEntityCard;
//	debugger;
         newEntity=ds.Areas.createEntity();
        newEntity.areaPathName=param.id;
        newEntity.areaPath=param.path;
		newEntityCard=ds.Cartes.find('carteName == :1', param.mapName);
		newEntity.areaCarte=newEntityCard;	
        newEntity.save();
            };

