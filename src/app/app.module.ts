import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeService } from './home/home.service';
import { GroupByPipe } from './group-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
