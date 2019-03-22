if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var curLoc = new google.maps.LatLng(lat, lng);
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
      var whereTo = document.getElementById('address').value;
      var mapOptions = {
        zoom: 15,
        center: curLoc,
        mapTypeControl: true,
      };
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      directionsDisplay.setMap(map);
      var request = {
        origin: curLoc,
        destination: whereTo,
        travelMode: google.maps.DirectionsTravelMode.WALKING
      };
      directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    });
  }