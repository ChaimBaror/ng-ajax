import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitDbService {

  public urlindex = {
    'js' :'https://raw.githubusercontent.com/ChaimBaror/ajax/master/db/doc.js', 
    'txt':'https://raw.githubusercontent.com/ChaimBaror/ajax/master/db/doc.txt', 
    'json' :'https://raw.githubusercontent.com/ChaimBaror/ajax/master/db/doc.json', 
    'html':'https://raw.githubusercontent.com/ChaimBaror/ajax/master/db/doc.html', 
  }



  constructor(private http : HttpClient) { }

  httpget(url:string) : Observable<string>{
    return this.http.get<string>(url,{ responseType : 'text'})

  }



}
