/* Leaflet.js map part */
const mymap = L.map('worldmap').setView([0, 0], 3);
const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
const marker = L.marker([0, 0]).addTo(mymap);

/* ISS DATA PART */
const issURL = 'https://api.wheretheiss.at/v1/satellites/25544';
let initialisation = true;
async function getISS() {
    let response = await fetch(issURL);
    let data = await response.json() ;
    let latitude = data.latitude ;
    let longitude = data.longitude ;
    marker.setLatLng([latitude, longitude]);
    if (initialisation === true){
        mymap.setView([latitude, longitude], 4);
        initialisation = false;
    }
    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
    
}
setInterval(getISS, 2000)