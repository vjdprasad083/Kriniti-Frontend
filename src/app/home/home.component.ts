import { Component,OnInit} from '@angular/core';
import { HomeService } from './home.service';
import { jobs } from './jobs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
jobs=jobs;


  constructor( private service:HomeService){
    
    }


  // jobs: any = null;

  // ngOnInit(): void {
  //   this.service.getData().subscribe(
  //       (data)=> { 
  //         this.jobs=data;
  //         console.log(this.jobs);
  //       }
  //   )
  // }
 
  

}
