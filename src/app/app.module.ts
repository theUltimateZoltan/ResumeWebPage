import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import {HttpClientModule} from '@angular/common/http';
import { SectionViewerComponent } from './components/section-viewer/section-viewer.component';
import { ContentPlaceholderComponent } from './components/content-placeholder/content-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    GreetingComponent,
    SectionViewerComponent,
    ContentPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
