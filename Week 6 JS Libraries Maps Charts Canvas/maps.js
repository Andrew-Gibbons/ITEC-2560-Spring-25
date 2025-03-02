// Create variable metroAreaCoordinates and set it to an array with the latitude and longitude of the center of the Twin Cities metro area.
// Create variable zoomLevel and set it to a number between 1 and 20.
let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 9   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
// Create variable map and set it to a new Leaflet map object.
// The map object takes the id of the div element that will contain the map, and an object with the following properties:
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)



// Add the tile layer - roads, streets etc. Without this, nothing to see
// Both of these links are needed.  One is for the map and the other is for everything that (goes on a map for interactivty?)
// Add a tile layer to the map using the Leaflet library. The tile layer uses the OpenStreetMap tile server and has the following properties:
// - The URL of the tile server
// - An object with the attribution property that contains the text to be displayed in the bottom right corner of the map
// - Add the tile layer to the map
// - The tile layer is the base layer of the map and is used to display the map tiles
// - The map object is the container for all the layers that are displayed on the map
// - The addLayer method is used to add a layer to the map
// - The tile layer is added to the map using the addLayer method
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // Add a marker for each college campus
    // Create an array of objects with information about each college campus
    campuses =  [
        {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
        {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
        {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
        {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
        {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
    ]
// Loop through the campuses array
campuses.forEach(function(collegeCampus) {
    // Set variable to add text to the marker
    // Use the backtick character to create a multi-line string
    // The ${} syntax is used to insert the name and website of the college campus
    // The <br> tag is used to create a line break in the text
    // The <a> tag is used to create a link to the website of the college campus
    // The href attribute of the <a> tag is set to the website of the college campus
    // The text of the <a> tag is set to "Website"
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`
    // Draw a marker
    // Add a marker to the map using the Leaflet library
    // The marker is placed at the coordinates of the college campus
    // The bindPopup method is used to attach the text to the marker
    // The addTo method is used to add the marker to the map
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})

// // Add some markers for Minneapolis College and Saint Paul College
// // Make a variable to be coordinates for Minneapolis College
// let mctcCoordinates = [44.9724, -93.2844]
// // Make variable with a marker for MCTC with the Leaflet library and the coordinates as the argument
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)

// Make a variable to be coordinates for St. Paul College
// let stPaulCoordinates = [44.94839, -93.1099]
// Make variable with a marker for St. Paul College with the Leaflet library and the coordinates as the argument
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)

// Make a variable to be coordinates for Normandale College   
// let normaldaleCoordinates = [44.8297, -93.3312]
// Make variable with a marker for Normandale College with the Leaflet library and the coordinates as the argument
// let normaldaleMarker = L.marker(normaldaleCoordinates)
//     .bindPopup('Normaldale College<br><a href="https://normandale.edu">Website</a>')
//     .addTo(map)

// Add a circle approximately around the Twin Cities metro
// Create a circle around the Twin Cities metro area using the Leaflet library
// The circle is centered at the coordinates of the Twin Cities metro area
// The color of the circle is set to purple
// The radius of the circle is set to 30,000 meters
// The fillOpacity of the circle is set to 0.1
// The bindPopup method is used to attach a popup to the circle
// The addTo method is used to add the circle to the map
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'purple',    // use any CSS color name
    radius: 30000,
    fillOpacity: 0.1
})
    .bindPopup("Twin Cities Metro Area")
    .addTo(map)