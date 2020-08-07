import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Result } from '../models/Results';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  baseUrl:string='https://api.datamuse.com/words?';
  constructor(private http : HttpClient) { }
  //docs
  meansLike(phrase:string[],topics:string[]):Observable<Result[]>{
    
    console.log("service called");
    var phrase_m=phrase.join('+');
    var url=this.baseUrl+"ml="+phrase_m;
    if(topics.length != 0)
    {
      var topics_m=topics.join(',');
      url+="&topics="+topics_m;
    }
    url+="&max=50";
    console.log(url);
    return this.http.get<Result[]>(url);
    

  }


  //adjectives for noun
  adjectives(noun:string,topics:string[]):Observable<Result[]>{
    
    console.log("service called");
  
    var url=this.baseUrl+"rel_jjb="+noun;
    if(topics.length != 0)
    {
      var topics_m=topics.join(',');
      url+="&topics="+topics_m;
    }
    url+="&max=50";
    console.log(url);
    return this.http.get<Result[]>(url); 

  }
  //nouns for adjectives
  nouns(adj:string,topics:string[]):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_jja="+adj;

    if(topics.length != 0)
    {
      var topics_m=topics.join(',');
      url+="&topics="+topics_m;
    }
    url+="&max=50";
    console.log(url);
    return this.http.get<Result[]>(url); 

  }
  //kind of(parent class of a word)
  hypernyms(word:string,topics:string[]):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_spc="+word;

    if(topics.length != 0)
    {
      var topics_m=topics.join(',');
      url+="&topics="+topics_m;
    }
    url+="&max=50";
    console.log(url);
    return this.http.get<Result[]>(url); 

  }
  //examples for a word
  hyponyms(word:string,topics:string[]):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_gen="+word;

    if(topics.length != 0)
    {
      var topics_m=topics.join(',');
      url+="&topics="+topics_m;
    }
    url+="&max=50";
    console.log(url);
    return this.http.get<Result[]>(url); 

  }
  rhymes(word:string,topics:string[]):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_rhy="+word;

    if(topics.length != 0)
    {
      var topics_m=topics.join(',');
      url+="&topics="+topics_m;
    }
    url+="&max=50";
    console.log(url);
    return this.http.get<Result[]>(url); 

  }
  triggers(word:string,topics:string[]):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_trg="+word;

    if(topics.length != 0)
    {
      var topics_m=topics.join(',');
      url+="&topics="+topics_m;
    }
    url+="&max=50";
    console.log(url);
    return this.http.get<Result[]>(url); 

  }
  
  homophones(word:string,topics:string[]):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_hom="+word;

    if(topics.length != 0)
    {
      var topics_m=topics.join(',');
      url+="&topics="+topics_m;
    }
    url+="&max=50";
    console.log(url);
    return this.http.get<Result[]>(url); 

  }
  //word

  comprises(word:string):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_com="+word;
    url+="&max=10";
    return this.http.get<Result[]>(url); 

  }
  partof(word:string):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_par="+word;
    url+="&max=10";
    return this.http.get<Result[]>(url); 

  }
  synonyms(word:string):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_syn="+word;
    url+="&max=10";
   
    return this.http.get<Result[]>(url); 

  }
  antonyms(word:string):Observable<Result[]>{
    
    console.log("service called");
    var url=this.baseUrl+"rel_ant="+word;
    url+="&max=10";
    return this.http.get<Result[]>(url); 

  }
  info(word:string):Observable<Result[]>{

    var url=this.baseUrl+"sp="+word+"&md=dpr&ipa=1&max=1";
    console.log(url);
    return this.http.get<Result[]>(url); 
    
   }
  
}
