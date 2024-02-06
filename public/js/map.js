document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var mymap = L.map('map').setView([59.4370, 24.7536], 9);

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Add markers for specific locations
    var marker1 = L.marker([59.395278, 24.664444]).addTo(mymap).bindPopup('Ago oli siin (8.12.23)');
    var marker2 = L.marker([59.393889, 24.668889]).addTo(mymap).bindPopup('Ago oli siin (19.10.23)');
    var marker3 = L.marker([59.396944, 24.662778]).addTo(mymap).bindPopup('Ago oli siin (19.12.23)');
    var marker4 = L.marker([59.265833, 25.648889]).addTo(mymap).bindPopup('Ago oli siin (30.9.23)');
    var marker5 = L.marker([59.395276, 24.664442]).addTo(mymap).bindPopup('Ago oli siin (12.12.23)');
    var marker6 = L.marker([59.508333, 24.830833]).addTo(mymap).bindPopup('Ago oli siin (12.12.23)');
});