import {Component, OnInit} from '@angular/core';
import {GoogleMap} from "@angular/google-maps";

@Component({
  selector: 'app-interactive-map',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './interactive-map.component.html',
  styleUrl: './interactive-map.component.css'
})
export class InteractiveMapComponent implements OnInit{

  ngOnInit(): void {
    const CONFIGURATION = {
      locations: [
        { title: "Escondido Grill", address1: "601 Geary St", address2: "San Francisco, CA 94102, USA", coords: { lat: 37.7866, lng: -122.4133 }, placeId: "ChIJ5Sz52pGAhYAR1raOybzuDp8", actions: [{ label: "Reserve a table", defaultUrl: "https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png" }] },
        { title: "Escondido Grill", address1: "747 3rd St", address2: "San Francisco, CA 94107, USA", coords: { lat: 37.7785, lng: -122.392 }, placeId: "ChIJeyVKpNd_j4ARLUED10OEr1s", actions: [{ label: "Reserve a table", defaultUrl: "https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png" }] },
        // Resto de ubicaciones...
      ],
      mapOptions: { center: { lat: 38.0, lng: -100.0 }, fullscreenControl: true, mapTypeControl: false, streetViewControl: false, zoom: 4, zoomControl: true, maxZoom: 17, mapId: "" },
      mapsApiKey: "YOUR_API_KEY_HERE",
      capabilities: { input: true, autocomplete: true, directions: false, distanceMatrix: true, details: false, actions: true }
    };

    document.addEventListener('DOMContentLoaded', async () => {
      await customElements.whenDefined('gmpx-store-locator');
      const locator = document.querySelector('gmpx-store-locator');
      locator?.configureFromQuickBuilder(CONFIGURATION);
    });
  }
}
