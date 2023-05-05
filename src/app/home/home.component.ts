import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { jobs } from './jobs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: HomeService) {}
  jobs: any = null;

  ngOnInit(): void {
    // this.service.getData().subscribe((data) => {  //Uncomment these lines if you had started backend
    //   this.jobs = data;
    // });
    this.jobs = jobs; // comment this line if you had started backend
  }
}
