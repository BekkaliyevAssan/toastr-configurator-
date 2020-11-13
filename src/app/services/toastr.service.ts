import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  public toastList = []
  toastsChange: Subject<any> = new Subject<any>()

  position: string
  positionChange: Subject<any> = new Subject<any>()
  
  constructor() { 
    this.toastsChange.subscribe(value => {
      this.toastList.push(value)
    })

    this.positionChange.subscribe(value => {
      this.position = value
    })
  }

  onSubmit(title, content, data) {
    this.toastsChange.next({ 
      title_: data.title, 
      content_: data.content, 
      status_: data.status, 
      position_: data.position,
      showTitle_: data.showTitle,
      allowClose: data.allowClose
    })

    this.onPositionChange(data.position)

    title.sayHello()
    title.onInputFocus()
    content.sayHello()

    console.log(data)
  }  

  onPositionChange(position) {
    this.positionChange.next(position)
  }
}
