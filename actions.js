var fn = {
	ready: function(){
		document.addEventListener("deviceready",fn.init,false);
	},
	init: function(){
		navigator.geolocation.getCurrentPosition(function(p){
			alert(p.coords.latitude + "\n" + p.coords.longitude + "\n" + p.timeStamp);
		},function(){
			alert("error");
		});
	}
}
$(fn.ready);