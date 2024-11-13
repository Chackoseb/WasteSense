import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Bin } from 'src/app/models/bin';
import { BinOsmService } from 'src/app/services/bin-osm.service';

@Component({
  selector: 'app-city-map',
  templateUrl: './city-map.component.html',
  styleUrls: ['./city-map.component.css']
})
export class CityMapComponent implements OnInit {
  private map!: L.Map;
  public fillLevelThreshold: number = 70;
  private bins: Bin[] = [];
  private routeControl: any = null;
  private ustLocation = L.latLng(8.536498, 76.883274); // UST Global Trivandrum coordinates

  constructor(private binService: BinOsmService){}
  
  ngOnInit(): void {
    this.initMap();
    this.loadBins();
  }

  private initMap(): void {
    this.map = L.map('map').setView([8.536498, 76.883274], 12.5);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private loadBins(): void {
    this.binService.getBins().subscribe((data: Bin[]) => {
      this.bins = data;
      this.displayBins();
    });
  }

  private displayBins(): void {
    this.bins.forEach(bin => {
      const marker = L.marker([bin.location.latitude, bin.location.longitude], {
        icon: this.getIcon(bin.fillLevel)
      }).addTo(this.map);
      marker.bindPopup(`
        <b>Bin ID:</b> ${bin.binId}<br>
        <b>Fill Level:</b> ${bin.fillLevel}%<br>
        <b>Address:</b> ${bin.address.street}, ${bin.address.city}
      `);
    });
    const marker2 = L.marker([8.536498, 76.883274], {
      icon: this.getIcon(9999)
    }).addTo(this.map);
    marker2.bindPopup(`
      <b>Waste Collection Center</b> <br>
      <b>UST Global Trivandrum</b>
    `);
  }

  public showRoute(): void {
    // Remove the existing route if there is one
    if (this.routeControl) {
      this.map.removeControl(this.routeControl);
    }

    // Filter bins based on the fill level threshold
    const filteredBins = this.bins
      .filter(bin => bin.fillLevel >= this.fillLevelThreshold)
      .map(bin => L.latLng(bin.location.latitude, bin.location.longitude));

    if (filteredBins.length > 0) {
      const waypoints = [this.ustLocation, ...filteredBins, this.ustLocation];
      
      this.routeControl = L.Routing.control({
        waypoints: waypoints,
        routeWhileDragging: false,
        lineOptions: {
          styles: [{ color: 'blue', opacity: 0.7, weight: 5 }]
        },
        createMarker: () => null  // Do not add markers for each waypoint
      }).addTo(this.map);
      // this.routeControl.hide();
    } else {
      alert('No bins meet the fill level threshold.');
    }
  }


  private getIcon(fillLevel: number): L.Icon {
    let iconUrl = 'assets/default-bin.png';   //default bin-icon

    if (fillLevel >= 0 && fillLevel <= 40) {
      iconUrl = 'assets/green-icon.png';
    } else if (fillLevel >= 41 && fillLevel <= 70) {
      iconUrl = 'assets/yellow-icon.png';
    } else if (fillLevel >= 71 && fillLevel <= 90) {
      iconUrl = 'assets/orange-icon.png';
    } else if (fillLevel >= 91 && fillLevel <= 99) {
      iconUrl = 'assets/red-icon.png';
    } else if (fillLevel === 100) {
      iconUrl = 'assets/black-icon.png';
    } else if (fillLevel === 9999) {
      iconUrl = 'assets/collection-center.png'
    }

    return L.icon({
      iconUrl,
      iconSize: [33, 30],
      iconAnchor: [12, 41],     // point of the icon which will correspond to marker's location
      popupAnchor: [5, -34],    // point from where pop up anchor should come
    });
  }

}
