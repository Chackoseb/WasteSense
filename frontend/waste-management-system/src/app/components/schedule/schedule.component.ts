import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from 'src/app/services/schedule.service'; 
import { BinService } from 'src/app/services/bin.service'; 
import { Schedule } from 'src/app/models/schedule';
import { Bin } from 'src/app/models/bin';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  scheduleForm!: FormGroup;
  bins: Bin[] = [];
  schedules: Schedule[] = [];
  isNewScheduleFormVisible: boolean = false;
  isHistoryVisible: boolean = false;
  schedule: Schedule = {
    scheduleId: '',
    scheduledDate: '',
    bins: [],
    status: ''
  }

  constructor(
    private fb: FormBuilder,
    private scheduleService: ScheduleService,
    private binService: BinService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loadBins();
  }

  createForm() {
    this.scheduleForm = this.fb.group({
      scheduleId: ['', Validators.required],
      scheduledDate: ['', Validators.required]
    });
  }

  showNewScheduleForm() {
    this.isHistoryVisible = false
    this.isNewScheduleFormVisible = true;
  }

  showHistory() {
    this.isNewScheduleFormVisible = false
    this.isHistoryVisible = true;
    this.loadHistory();
  }

  loadBins() {
    this.binService.getAllBins().subscribe((bins: any[]) => {
      this.bins = bins;
    });
  }

  loadHistory() {
    this.scheduleService.getAllSchedules().subscribe((schedules: any[]) => {
      this.schedules = schedules;
    });
  }

  onBinSelect(bin: any, event: any) {
    if (event.target.checked) {
      this.schedule.bins.push(bin.binId)
    } 
    else {
      const index = this.schedule.bins.indexOf(bin.binId);
      if (index > -1) {
        this.schedule.bins.splice(index, 1);
      }
    }
  }

  createSchedule() {
    if (this.scheduleForm.invalid || this.schedule.bins.length === 0) {
      return;
    }
  
    const formValue = this.scheduleForm.value;

    this.schedule.status = 'PENDING';
  
    this.scheduleService.createSchedule(this.schedule).subscribe(response => {
      alert('New schedule created!');
      this.scheduleForm.reset();
      this.schedule.bins = []
      this.isNewScheduleFormVisible = false;
    });
  }
  
}
