import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8080/api/v1/jobs"
  getData(){
   return  this.http.get(this.url);
  }


}
