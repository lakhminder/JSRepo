import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
/**
 * This uses Angular HTTP service HttpClient for making rest calls
 * Angular has created this service  as part of HttpClientModule
 * 
 */
@Component({
  selector: 'eg5-http-client',
  templateUrl: './eg5-http-client.component.html',
  styleUrls: ['./eg5-http-client.component.css']
})
export class Eg5HttpClientComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/koushikkothagal');//returns Observable
    obs.subscribe((res) => console.log(res));
  }

}
