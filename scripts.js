const issURL = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
    let response = await fetch(issURL);
    let data = await response.json() ;
    let latitude = data.latitude ;
    let longitude = data.longitude ;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
    console.log(latitude);
    console.log(longitude)
}
getISS()