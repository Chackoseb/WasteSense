import { Component, OnInit } from '@angular/core';
import { Bin } from 'src/app/models/bin';
import { BinService } from 'src/app/services/bin.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  selectedAction: string = '';
  bins: Bin[] = [];
  newBin: Bin = {
    binId: '',
    location: {
      latitude: 0,
      longitude: 0
    },
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    fillLevel: 0,
    type: '',
    alerts: false
  };
  selectedBinId: string = '';
  modifyBin: Bin|null = null
  selectedBinForDelete: Bin | null | undefined = undefined

  constructor(private binService: BinService) {}

  ngOnInit(): void {
    this.loadBins();
  }

  selectAction(action: string): void {
    this.selectedAction = action;
  }

  loadBins(): void {
    this.binService.getAllBins().subscribe({
      next: (data) => {
        this.bins = data;
      },
      error: (error) => {
        console.error('Error loading bins:', error);
        alert('Failed to load bins. Please try again.');
      }
    });
  }

  onIssueBin(): void {
    this.binService.createBin(this.newBin).subscribe((response) => {
      console.log('Bin issued:', response);
      this.loadBins();
      alert('Bin successfully issued!');
    },
    (error) => {
      console.error('Error issuing bin:', error);
      alert('Failed to issue bin. Please try again.');
    });
  }

  loadBinDetails(): void {
    if (!this.selectedBinId) return;
    
    const selectedBin = this.bins.find(bin => bin.binId === this.selectedBinId);
    if (selectedBin) {
      //copy to avoid modifying the original bin object
      this.modifyBin = JSON.parse(JSON.stringify(selectedBin));
    }
  }


  onModifyBin(): void {
    if (!this.modifyBin || !this.modifyBin.id) {
      alert('No bin selected or bin details not loaded');
      return;
    }

    if (!this.validateBinData(this.modifyBin)) {
      alert('Please fill in all required fields with valid values');
      return;
    }

    this.binService.updateBin(this.modifyBin.id, this.modifyBin).subscribe({
      next: (response) => {
        console.log('Bin modified:', response);
        this.loadBins();
        alert('Bin updated successfully!');
      },
      error: (error) => {
        console.error('Error modifying bin:', error);
        alert('Failed to update bin. Please try again.');
      }
    });
  }

  private validateBinData(bin: Bin): boolean {
    if (!bin.location || 
        typeof bin.location.latitude !== 'number' || 
        typeof bin.location.longitude !== 'number') {
      return false;
    }
    
    if (!bin.address || 
        !bin.address.street || 
        !bin.address.city || 
        !bin.address.state || 
        !bin.address.zipCode) {
      return false;
    }
    
    if (typeof bin.fillLevel !== 'number' || 
        bin.fillLevel < 0 || 
        bin.fillLevel > 100) {
      return false;
    }
    
    if (!bin.type) {
      return false;
    }
    
    return true;
  }

  onDeleteBin(binId: string): void {
    this.selectedBinForDelete = this.bins.find(bin => bin.binId === binId);
    
    if (!this.selectedBinForDelete || !this.selectedBinForDelete.id) {
      alert('Could not find the selected bin.');
      return;
    }

    // Show confirmation dialog
    if (confirm(`Are you sure you want to delete bin ${this.selectedBinForDelete.binId}?`)) {
      // Use the MongoDB id for deletion
      this.binService.deleteBin(this.selectedBinForDelete.id).subscribe({
        next: () => {
          console.log('Bin deleted successfully');
          this.loadBins(); // Refresh the list
          alert('Bin deleted successfully!');
          this.selectedBinForDelete = null; // Reset selection
        },
        error: (error) => {
          console.error('Error deleting bin:', error);
          alert('Failed to delete bin. Please try again.');
        }
      });
    }
  }
}
