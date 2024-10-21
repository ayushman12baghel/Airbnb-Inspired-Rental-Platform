// Ensure that the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Get the map element
  const mapElement = document.getElementById('map');

  // Check if the map element exists
  if (mapElement) {
      // Get the coordinates from the data attribute
      const coordinates = mapElement.getAttribute('data-coordinates');

      // Parse the coordinates
      let parsedCoordinates;
      try {
          parsedCoordinates = JSON.parse(coordinates);
          console.log("Parsed Coordinates:", parsedCoordinates); // Log parsed coordinates for debugging
      } catch (error) {
          console.error("Error parsing coordinates:", error);
          return; // Exit if there's an error
      }

      // Check if the parsed coordinates are valid
      if (Array.isArray(parsedCoordinates) && parsedCoordinates.length === 2) {
          // Initialize the map
          var map = L.map("map").setView([parsedCoordinates[1], parsedCoordinates[0]], 13); // Use lat, lng

          // Add the OpenStreetMap tile layer
          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
          }).addTo(map);

          // Add a marker at the coordinates
          var marker = L.marker([parsedCoordinates[1], parsedCoordinates[0]]).addTo(map);
          marker.bindPopup("<b>" + listing.title + "</b><br>I am a popup.").openPopup(); // Change the title dynamically

          // Function to handle map click events
          function onMapClick(e) {
              alert("You clicked the map at " + e.latlng);
          }
          map.on("click", onMapClick);

          // Initialize the geocoder control
          var control = L.Control.geocoder({
              geocoder: new L.Control.Geocoder.OpenCage({
                  apiKey: process.env.MAP_TOKEN, // Your OpenCage API key
              }),
              placeholder: "Search for a place...", // Placeholder text
              collapsed: false, // Show the search box expanded
              limit: 5, // Limit the number of results
          }).addTo(map);

          // Optional: Add a marker when the user selects a search result
          control.on("markgeocode", function (e) {
              var latlng = e.geocode.center;
              L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
              map.setView(latlng, 13); // Center the map on the selected location
          });
      } else {
          console.error("Invalid parsed coordinates:", parsedCoordinates);
      }
  } else {
      console.error("Map element not found.");
  }
});
