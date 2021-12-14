let singapore = [1.3598, 103.8107]; 
let map = L.map('map').setView(singapore, 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);


var ntuc =  
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#f20202",
        "marker-size": "medium",
        "marker-symbol": "rocket",
        "store": "FairPrice Punggol Drive",
        "address": "612 Punggol Dr., 01-06 Damai Grove, Singapore 820612",
        "hours": "Open 24 hours"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          103.90852510929108,
          1.404863324177814
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#f20202",
        "marker-size": "medium",
        "marker-symbol": "rocket",
        "store": "FairPrice Punggol Walk",
        "address": "308C Punggol Walk, #01-352, Singapore 823308",
        "hours": "Closes 11PM"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          103.89910720288754,
          1.4082774177657507
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#f20202",
        "marker-size": "medium",
        "marker-symbol": "rocket",
        "store": "FairPrice Finest Waterway Point",
        "address": "83 Punggol Central, #B2-32, Singapore 828761",
        "hours": "Open 24 hours"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          103.90162378549576,
          1.406969565108451
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#f20202",
        "marker-size": "medium",
        "marker-symbol": "rocket",
        "store": "FairPrice",
        "address": "11 Rivervale Crescent, #03-01, Rivervale Mall, Singapore 545082",
        "hours": "Closes 10PM"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          103.90421479940414,
          1.3923237105438568
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#f20202",
        "marker-size": "medium",
        "marker-symbol": "rocket",
        "store": "FairPrice Punggol Plaza",
        "address": "168 Punggol Field, 03-01/02 Punggol Plaza, Singapore 820168",
        "hours": "Closes 11PM"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          103.91292124986649,
          1.3943723123205718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#f20202",
        "marker-size": "medium",
        "marker-symbol": "rocket",
        "store": "FairPrice Punggol Oasis Terraces",
        "address": "681 Punggol Dr., B1-01 Oasis Terraces, Singapore 820681",
        "hours": "Closes 11pm"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          103.91319215297699,
          1.4025961970312912
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#f20202",
        "marker-size": "medium",
        "marker-symbol": "rocket",
        "store": "NTUC FairPrice",
        "address": "118 Rivervale Dr, 01-08 Rivervale Plaza, Singapore 540118",
        "hours": "Open 24 hours"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          103.90185981988907,
          1.3853412900818562
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#f20202",
        "marker-size": "medium",
        "marker-symbol": "rocket",
        "store": "FairPrice",
        "address": "279 Sengkang E Ave, #01-06, Singapore 540279",
        "hours": "Open 24 hours"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          103.89328345656395,
          1.386412519137604
        ]
      }
    }
  ]
}

var ntucLogo = new L.Icon({
  iconUrl:"images/ntuclocator.png",
  iconSize: [35, 35],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

function ntucSg (feature, layer){
  layer.bindPopup(feature.properties.store);
  layer.setIcon(ntucLogo);
};

L.geoJSON(ntuc,{
  onEachFeature: ntucSg
}).addTo(map);

var ustar = 
{
  "type": "FeatureCollection",
  "features": [
      {
          "type": "Feature",
          "properties": {
              "marker-color": "#7e7e7e",
              "marker-size": "medium",
              "marker-symbol": "",
              "store": "U Stars Supermarket @ 261",
              "address": "261 Punggol Way, #01-02, Singapore 820261",
              "hours": "Open 24hours"
          },
          "geometry": {
              "type": "Point",
              "coordinates": [
                  103.89688700437546,
                  1.4054156930843664
              ]
          }
      },
      {
          "type": "Feature",
          "properties": {
              "marker-color": "#7e7e7e",
              "marker-size": "medium",
              "marker-symbol": "",
              "store": "U Stars Supermarket @ 291",
              "address": "291 Yishun Street 22, 01 389/391, Singapore 760291",
              "hours": "Open 24hours"
          },
          "geometry": {
              "type": "Point",
              "coordinates": [
                  103.83673310279846,
                  1.435809187157659
              ]
          }
      },
      {
          "type": "Feature",
          "properties": {
              "marker-color": "#7e7e7e",
              "marker-size": "medium",
              "marker-symbol": "",
              "store": "U Stars Supermarket @ 108 Hougang",
              "address": "108 Hougang Ave 1, #01-1313, Singapore 530108",
              "hours": "Open 24hours"
          },
          "geometry": {
              "type": "Point",
              "coordinates": [
                  103.88970673084258,
                  1.353016492592029
              ]
          }
      },
      {
          "type": "Feature",
          "properties": {
              "marker-color": "#7e7e7e",
              "marker-size": "medium",
              "marker-symbol": "",
              "store": "U Stars Supermarket @ 829",
              "address": "BLK 829, Tampines Street 81, #01-272/274 276/278, Singapore 520829",
              "hours": "Open 24hours"
          },
          "geometry": {
              "type": "Point",
              "coordinates": [
                  103.9348429441452,
                  1.3492088147251144
              ]
          }
      },
      {
          "type": "Feature",
          "properties": {
              "marker-color": "#7e7e7e",
              "marker-size": "medium",
              "marker-symbol": "",
              "store": "U Stars Supermarket @ 18",
              "address": "18, #01-113 Toh Yi Dr, 590018",
              "hours": "Closes 10PM"
          },
          "geometry": {
              "type": "Point",
              "coordinates": [
                  103.77330154180525,
                  1.3399845563451882
              ]
          }
      },
      {
          "type": "Feature",
          "properties": {
              "marker-color": "#7e7e7e",
              "marker-size": "medium",
              "marker-symbol": "",
              "store": "U Stars Supermarket",
              "address": "810 Choa Chu Kang Ave 7, #01-01, Singapore 680810",
              "hours": "Open 24hours"
          },
          "geometry": {
              "type": "Point",
              "coordinates": [
                  103.74649822711945,
                  1.3742937932852155
              ]
          }
      }
  ]
}

var ustarLogo = new L.Icon({
  iconUrl:"images/ustarlocator.png",
  iconSize: [35, 35],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  
});

function ustarSg (feature, layer){
  layer.bindPopup(feature.properties.store);
  layer.setIcon(ustarLogo);
};

L.geoJSON(ustar,{
  onEachFeature: ustarSg
}).addTo(map);