import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  
  @ViewChild('input') input: ElementRef
  public onFocus: boolean
  constructor() { }

  ngOnInit(): void {
    if (this.label == 'title') this.onInputFocus()
  }

  onInput(value) {
    this.onDatePicked.emit(value)
  }

  sayHello() {
    this.input.nativeElement.value = ''
  }
  
  onInputFocus() {
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.input.nativeElement.focus();
    },0); 
  }
}
