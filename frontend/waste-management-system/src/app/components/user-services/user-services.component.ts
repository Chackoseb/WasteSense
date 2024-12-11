import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.css']
})
export class UserServicesComponent {
  activeForm: string | null = 'binRequest'; // To track which form is active
  binRequestForm: FormGroup;
  bulkCollectionForm: FormGroup;
  complaintForm: FormGroup;

  private apiUrl = 'http://localhost:8888/requests'; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.binRequestForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required]
      }),
      description: ['', Validators.required]
    });

    this.bulkCollectionForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required]
      }),
      quantity: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required]
    });

    this.complaintForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      subject: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  setActiveForm(form: string) {
    this.activeForm = form;
  }

  submitBinRequest() {
    const request = {
      ...this.binRequestForm.value,
      requestType: 'BIN_REQUEST'
    };
    this.http.post(this.apiUrl, request).subscribe(() => {
      alert("Bin request submitted successfully!\nCheck your email for further updates.");
      this.binRequestForm.reset();
      this.activeForm = null;
    });
  }

  submitBulkCollectionRequest() {
    const request = {
      ...this.bulkCollectionForm.value,
      requestType: 'BULK_COLLECTION'
    };
    this.http.post(this.apiUrl, request).subscribe(() => {
      alert('Bulk collection request submitted successfully!\nWe will be connecting with you shortly');
      this.bulkCollectionForm.reset();
      this.activeForm = null;
    });
  }

  submitComplaint() {
    const request = {
      ...this.complaintForm.value,
      requestType: 'COMPLAINT',
      status: 'OPEN'
    };
    this.http.post(this.apiUrl, request).subscribe(() => {
      alert('Complaint registered successfully!\nCheck your mail for further updates');
      this.complaintForm.reset();
      this.activeForm = null;
    });
  }
}
