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

var ntuc = {
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
  layer.bindPopup(feature.properties.store.location);
  layer.setIcon(ntucLogo);
};

L.geoJSON(ntuc,{
  onEachFeature: ntucSg
}).addTo(map);