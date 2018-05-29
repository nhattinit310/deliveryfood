import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { Data} from '../../data';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dt = {};

  constructor(private firstHttp: DataService) {

   }

  ngOnInit() {
    
  }
  submited = false;
  onSubmit(){
        this.firstHttp.getdata().subscribe(data => {
      this.dt = data;
      console.log(this.dt);
    })
  }
 
  
}
