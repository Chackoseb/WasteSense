import { Component } from '@angular/core';
import { ThingSpeakService } from '../thing-speak.service';

@Component({
  selector: 'app-bin-update',
  templateUrl: './bin-update.component.html',
  styleUrls: ['./bin-update.component.css']
})
export class BinUpdateComponent {
  bins = [
    { name: 'Bin1', channelId: '2737751', writeApiKey: '1CS7ZPFJGH94K2MO' },
    { name: 'Bin2', channelId: '2737899', writeApiKey: '50WUXQDY0NF3XNH4' },
    { name: 'Bin3', channelId: '2737903', writeApiKey: 'B9R0LJT1M27FXOMP' },
    { name: 'Bin4', channelId: '2737905', writeApiKey: 'YOC7YE5A2LXA8WTM' }
    
  ];

  selectedBin: string = this.bins[0].channelId; // Default selection
  fillLevel: number = 0;

  constructor(private thingSpeakService: ThingSpeakService) {}

  updateBin(): void {
    const bin = this.bins.find(b => b.channelId === this.selectedBin);
    if (bin) {
      this.thingSpeakService.updateFillLevel(bin.channelId, bin.writeApiKey, this.fillLevel)
        .subscribe(response => {
          console.log('Fill level updated successfully:', response);
        }, error => {
          console.error('Error updating fill level:', error);
        });
    }
  }

}
