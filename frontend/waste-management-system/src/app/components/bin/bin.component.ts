import { Component, OnInit } from '@angular/core';
import { Bin } from 'src/app/models/bin';
import { BinService } from 'src/app/services/bin.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css']
})
export class BinComponent implements OnInit {
  bins: any[] = []
  errorMessage: string = ''
  public fillLevelThreshold: number = 80;

  constructor(private binService: BinService){}

  ngOnInit(): void {
    this.loadBins()
  }

  loadBins(): void{
    this.binService.getAllBins().subscribe({
      next: data => this.bins = data,
      error: error => this.errorMessage = 'Could not load bins'
    })
  }

  showImmediateBins(): void{
    this.binService.getBinsRequiringImmediateAction(this.fillLevelThreshold).subscribe({
      next: data => this.bins = data,
      error: error => this.errorMessage = 'Could not load bins'
    })
  }

  deleteBin(bin: Bin) {
    if (confirm(`Are you sure you want to delete bin ${bin.binId}?`)) {
      this.binService.deleteBin(bin.id!)
        .subscribe({
          next: () => { 
            this.bins = this.bins.filter(b => b.id !== bin.id);
            console.log(`Bin ${bin.binId} deleted successfully.`);
            this.loadBins();
          },
          error: error => this.errorMessage = error.message 
        });
    }
  }

}
