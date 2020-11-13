import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-toastr-wrapper',
  templateUrl: './toastr-wrapper.component.html',
  styleUrls: ['./toastr-wrapper.component.css']
})
export class ToastrWrapperComponent implements OnInit {

  constructor(private ts: ToastrService) { }

  ngOnInit(): void {
  }

  get toastList() {
    return this.ts.toastList
  }

  get position() {
    return this.ts.position
  }

  onDelete(val) {
    
  }
  
}
