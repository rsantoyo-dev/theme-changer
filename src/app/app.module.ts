import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SuperJssModule } from 'super-jss';

@NgModule({
  imports: [BrowserModule, FormsModule, SuperJssModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    MainContentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
