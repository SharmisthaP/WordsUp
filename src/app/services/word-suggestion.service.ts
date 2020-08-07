import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Result } from '../models/Results';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordSuggestionService {

  baseUrl:string='https://api.datamuse.com/sug?s=';
  constructor(private http : HttpClient) { }

  getSuggestion(word:string):Observable<Result[]>{
    var url=this.baseUrl+word;
    return this.http.get<Result[]>(url);
  }
}
