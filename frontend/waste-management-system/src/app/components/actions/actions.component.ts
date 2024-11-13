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
  newBin: Bin | any
  selectedBinId: string = '';
  modifyBin: Bin|any

  constructor(private binService: BinService) {}

  ngOnInit(): void {
    this.loadBins();
  }

  selectAction(action: string): void {
    this.selectedAction = action;
  }

  loadBins(): void {
    this.binService.getAllBins().subscribe((data) => {
      this.bins = data;
    });
  }

  onIssueBin(): void {
    this.binService.createBin(this.newBin).subscribe((response) => {
      console.log('Bin issued:', response);
      this.loadBins();
    });
  }

  loadBinDetails(): void {
    this.modifyBin = this.bins.find(bin => bin.binId === this.selectedBinId);
  }

  // onModifyBin(): void {
  //   this.binService.updateBin(this.selectedBinId, this.modifyBin).subscribe((response) => {
  //     console.log('Bin modified:', response);
  //     this.loadBins();
  //   });
  // }

  onModifyBin(): void {
    const binToModify = this.bins.find(bin => bin.binId === this.selectedBinId);
    if (binToModify) {
      this.binService.updateBin(this.selectedBinId, binToModify).subscribe((response) => {
        console.log('Bin modified:', response);
        this.loadBins();
      });
    }
  }

  onDeleteBin(binId: string): void {
    this.binService.deleteBin(binId).subscribe((response) => {
      console.log('Bin deleted:', response);
      this.loadBins();
    });
  }
}
