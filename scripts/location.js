export function loadLocationJs() {
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("locationOutput");

    // Check if location is already stored in sessionStorage

    const storedLat = sessionStorage.getItem("user_latitude");

    const storedLng = sessionStorage.getItem("user_longitude");

    if (storedLat && storedLng) {
      output.textContent = `Latitude: ${storedLat}, Longitude: ${storedLng}`;

      return;
    }

    // Check if Geolocation is supported

    if (!navigator.geolocation) {
      output.textContent = "Geolocation is not supported by your browser.";

      return;
    }

    // Request user's location

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Display location

        output.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

        // Save to sessionStorage (clears on browser close)

        sessionStorage.setItem("user_latitude", latitude);

        sessionStorage.setItem("user_longitude", longitude);
      },

      (error) => {
        // Handle errors

        switch (error.code) {
          case error.PERMISSION_DENIED:
            output.textContent =
              "You blocked location access. Please enable it in your browser settings.";

            break;

          case error.POSITION_UNAVAILABLE:
            output.textContent = "Location information is unavailable.";

            break;

          case error.TIMEOUT:
            output.textContent = "The request to get your location timed out.";

            break;

          default:
            output.textContent = "An unknown error occurred.";

            break;
        }
      }
    );
  });
}
