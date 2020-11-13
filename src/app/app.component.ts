import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { ToastrService } from './services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toastr';
  constructor(private ts: ToastrService) {

  }

  @ViewChild('titleInput') titleInput
  @ViewChild('contentInput') contentInput

  public form = {
    title: '',
    content: '',
    status: 'success',
    position: 'bottom-right',
    showTitle: true,
    allowClose: true
  }

  onSubmit() {
    this.ts.onSubmit(this.titleInput, this.contentInput, this.form)
    console.log(this.form)
  }

  handleTitle(val) {
    this.form.title = val
  }

  handleContent(val) {
    this.form.content = val
  }

  onKeyDownEvent(event) {
    if (event.keyCode === 13) {
      this.onSubmit()
    }
  }
  selectedPosition(position) {
    this.form.position = position
  }
}
