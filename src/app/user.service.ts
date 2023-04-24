import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppModule } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
 
    constructor(private http:HttpClient) { 
  }

  getUser(username:string):any {
    return this.http.get(`https://api.github.com/search/users?q=${username}`);
  }

}
