import {Component, OnInit} from '@angular/core';
import {GoogleMap, MapMarker} from "@angular/google-maps";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-interactive-map',
  standalone: true,
  imports: [GoogleMap, MapMarker, NgForOf],
  templateUrl: './interactive-map.component.html',
  styleUrl: './interactive-map.component.css'
})
export class InteractiveMapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: -12.098089934437155, lng: -77.05815168994613 };
  zoom = 12;
  display: google.maps.LatLngLiteral | undefined;

  // Lista de marcadores
  markers: Array<{ position: google.maps.LatLngLiteral }> = [];

  // Método para inicializar los marcadores
  ngOnInit() {
    this.addMarkerAtPosition(-12.098089934437155, -77.05815168994613);
  }

  // Mover el centro del mapa al hacer clic
  moveMap(event: google.maps.MapMouseEvent) {
    this.center = event.latLng!.toJSON();
  }

  // Mostrar la posición en latitud y longitud mientras se mueve el ratón
  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }

  // Agregar un marcador al hacer clic en el mapa
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      const newMarker = {
        position: event.latLng.toJSON()
      };
      this.markers.push(newMarker);
    }
  }

  // Método para agregar un marcador en una posición específica
  addMarkerAtPosition(lat: number, lng: number) {
    const newMarker = {
      position: { lat, lng }
    };
    this.markers.push(newMarker);
  }
}
