import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http) {

   }

  ngOnInit() {
    
  }
  submited = false;
  onSubmit(){
    this.submited = true;
    const url = "http://localhost:3000/";
   
      headers = new Headers({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'});
   
    const body = JSON.stringify({"name": "Tin"});
    this.http.post(url,body,{httpOptions}).pipe();
  }

}
