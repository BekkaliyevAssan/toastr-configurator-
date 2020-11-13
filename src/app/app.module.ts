import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './shared/input/input.component';
import { ToastrComponent } from './shared/toastr/toastr.component';
import { ButtonComponent } from './shared/button/button.component';
import { ToastrWrapperComponent } from './shared/toastr-wrapper/toastr-wrapper.component';
import { IconComponent } from './shared/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ToastrComponent,
    ButtonComponent,
    ToastrWrapperComponent,
    IconComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
