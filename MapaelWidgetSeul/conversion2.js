var obj={legend : {
			area : {
				title :"Population of France by department", 
				slices : [
					{
						max :300000, 
						attrs : {
							fill : "#97e766"
						},
						label :"Less than de 300 000 inhabitants"
					},
					{
						min :300000, 
						max :500000, 
						attrs : {
							fill : "#7fd34d"
						},
						label :"Between 100 000 and 500 000 inhabitants"
					},
					{
						min :500000, 
						max :1000000, 
						attrs : {
							fill : "#5faa32"
						},
						label :"Between 500 000 and 1 000 000 inhabitants"
					},
					{
						min :1000000, 
						attrs : {
							fill : "#3f7d1a"
						},
						label :"More than 1 million inhabitants"
					}
				]
			}
		}};
		var string=JSON.stringify(obj);
string	

