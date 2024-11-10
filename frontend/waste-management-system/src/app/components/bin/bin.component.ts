import { Component, OnInit } from '@angular/core';
import { BinService } from 'src/app/services/bin.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css']
})
export class BinComponent implements OnInit {
  bins: any[] = []
  errorMessage: string = ''

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

}
