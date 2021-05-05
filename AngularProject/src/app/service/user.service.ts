import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../auth/register/register';

// @Injectable({
//   providedIn: 'root'
// })

const headeroption = {
  headers: new HttpHeaders({'Content-Type':'application/JSON'})
}

@Injectable()

export class UserService {
  constructor(private http:HttpClient) { }
  private _url = "http://localhost:3000/User";
  registerUser : Register = {
    id: 10000,
    Name:'',
    Email:'',
    Password:'',
  }

  setUserInfo(test:any):Observable<Register>{
    console.log("User Service Printing ",test)
    return this.http.post<Register>(this._url,test,headeroption)
  }
    getUserInformation():Observable<Register[]>{
      return this.http.get<Register[]>(this._url,headeroption);
    }

  }

