import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {
  @Input() content
  constructor() { }
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.content)
  }
  
  onClose(title) {
    this.onDatePicked.emit(title)
  }

}
