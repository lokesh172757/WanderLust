// Check if we have a valid map token and coordinates
if (mapToken && mapToken !== "your_mapbox_token" && listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

    const marker = new mapboxgl.Marker({color:"red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset:25})
        .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`))
        .addTo(map);
} else {
    // Show a message when map is not available
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = '<div style="padding: 20px; text-align: center; background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px;"><h5>Map Not Available</h5><p>Map functionality requires a valid Mapbox token and location coordinates.</p><p>Location: ' + listing.location + ', ' + listing.country + '</p></div>';
}
