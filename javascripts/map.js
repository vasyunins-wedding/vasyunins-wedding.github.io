<script type="text/javascript"> 
	ymaps.ready(init); 
	var myMap;
	
	function init() {  
		var i;
		var place;
		var pointer = [[57.77302079714255,40.90140849999999], [55.12276856531857,73.37842999999997], [51.69427263552066,39.335954999999984]];
	
		var myMap = new ymaps.Map("map", {
			center: [64.5438297880126,98.44240549999999],
			zoom: 3
		});
    
		for(i = 0; i < pointer.length; ++i) {
			place = new ymaps.Placemark(pointer[i]);
			myMap.geoObjects.add(place);
		}
	}; 
</script>