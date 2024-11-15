import { Component, OnInit } from '@angular/core';
import { BinService } from 'src/app/services/bin.service';
import { Bin } from 'src/app/models/bin';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  bins: Bin[] = [];
  errorMessage: string = '';
  selectedFilter: 'id' | 'street' | 'zip' = 'id';
  searchValue: string = '';
  availableOptions: string[] = [];
  
  constructor(private binService: BinService) {}

  ngOnInit(): void {
    this.updateAvailableOptions();
  }

  updateAvailableOptions(): void {
    this.binService.getAllBins().subscribe({
      next: (data) => {
        switch (this.selectedFilter) {
          case 'id':
            this.availableOptions = [...new Set(data.map(bin => bin.binId))];
            break;
          case 'street':
            this.availableOptions = [...new Set(data.map(bin => bin.address.street))];
            break;
          case 'zip':
            this.availableOptions = [...new Set(data.map(bin => bin.address.zipCode))];
            break;
        }
        this.availableOptions.sort();
      },
      error: error => this.errorMessage = 'Could not load options'
    });
  }

  onFilterChange(): void {
    this.searchValue = '';
    this.bins = [];
    this.updateAvailableOptions();
  }

  searchBins(): void {
    if (!this.searchValue) {
      this.bins = [];
      return;
    }

    this.binService.getAllBins().subscribe({
      next: (data) => {
        switch (this.selectedFilter) {
          case 'id':
            this.bins = data.filter(bin => bin.binId === this.searchValue);
            break;
          case 'street':
            this.bins = data.filter(bin => 
              bin.address.street.toLowerCase() === this.searchValue.toLowerCase()
            );
            break;
          case 'zip':
            this.bins = data.filter(bin => 
              bin.address.zipCode === this.searchValue
            );
            break;
        }
      },
      error: error => this.errorMessage = 'Could not search bins'
    });
  }
}