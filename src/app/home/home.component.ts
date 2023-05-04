import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: HomeService) {}
  jobs: any = null;

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.jobs = data;
    });
  }
}
