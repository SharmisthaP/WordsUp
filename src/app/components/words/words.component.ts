import { Component, OnInit } from '@angular/core';
import {WordSuggestionService} from '../../services/word-suggestion.service';
import {FetchDataService}  from '../../services/fetch-data.service';
import {Result } from "../../models/Results";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  title:string="Know your word";
  word:string="";
  chosen:boolean=false;
  suggestions:Result[];
  pos:string="";
  def:string="";
  pron:string="";
  syn:Result[];
  ant:Result[];
  com:Result[];
  spc:Result[];
  gen:Result[];
  par:Result[];


  constructor(private fetchSuggestion:WordSuggestionService,private fetchInfo:FetchDataService) { }

  ngOnInit(): void {
  }
  onWordChange(word:string)
  {
    //console.log('here in change');
    this.word=word;
    this.chosen=false; 
    this.pos="";
    this.def="";
    this.pron="";
    this.syn=[];
    this.ant=[];
    this.com=[];
    this.spc=[];
    this.gen=[];
    this.par=[]; 

    this.fetchSuggestion.getSuggestion(this.word).subscribe(result=>{
     
      //console.log(result);
      this.suggestions=[];
      this.suggestions=result;
    });
  }
  getInfo()
  {
    //word info
    this.chosen=true;
    this.fetchInfo.info(this.word).subscribe(result=>{
     var tags=result[0].tags;
     this.pron=tags[tags.length-1].substring(9,);
     console.log("tag array after removing pron");
     tags=tags.filter(tag=>!tag.includes("pron"));
     console.log(tags);
     //pronunciation
     
      //parts of speech
     for(var i=0;i<tags.length;++i)
     {
       if(tags[i]=="n")
        this.pos+=",noun";
      else if(tags[i]=="v")
        this.pos+=",verb";
      else if(tags[i]=="adj")
        this.pos+=",adjective";
      else if(tags[i]=="adv")
        this.pos+=",adverb";
      
     }
     //definition
     this.def=result[0].defs[0].substring(1,);
    
     console.log("def: "+this.def+" "+"pron: "+this.pron+" "+"pos: "+this.pos);
      
    });
  //synonyms,antonyms,comprises etc
  this.fetchInfo.synonyms(this.word).subscribe(result=>{
    console.log(result);
    this.syn=result;
  });
  this.fetchInfo.antonyms(this.word).subscribe(result=>{
    console.log(result);
    this.ant=result;
  });
  this.fetchInfo.partof(this.word).subscribe(result=>{
    console.log(result);
    this.par=result;
  });
  this.fetchInfo.hypernyms(this.word,[]).subscribe(result=>{
    console.log(result);
    this.spc=result;
  });
  this.fetchInfo.hyponyms(this.word,[]).subscribe(result=>{
    console.log(result);
    this.gen=result;
  });
  this.fetchInfo.comprises(this.word).subscribe(result=>{
    console.log(result);
    this.com=result;
  });

}
  checkSuggestion():boolean
  {
    
    if(this.word==''|| this.chosen)
      return false; 
    else 
      return true;
  }
  checkDef():boolean{
    if(this.def=="")
      return false;
    else return true;

  }
  checkPos():boolean{
    if(this.pos=="")
      return false;
    else return true;

  }
  checkPron():boolean{
    if(this.pron=="")
      return false;
    else return true;

  }
  checkSyn():boolean{
    if(this.syn.length==0)
      return false;
    else return true;

  }
  checkAnt():boolean{
    if(this.ant.length==0)
      return false;
    else return true;

  }
  checkCom():boolean{
    if(this.com.length==0)
      return false;
    else return true;

  }
  checkSpc():boolean{
    if(this.spc.length==0)
      return false;
    else return true;

  }
  checkGen():boolean{
    if(this.gen.length==0)
      return false;
    else return true;

  }
  checkPar():boolean{
    if(this.par.length==0)
      return false;
    else return true;
  }
  
 setWord(suggestion:Result)
 {
   console.log("in set");
   this.word=suggestion.word;
   this.chosen=true;
   return false;
 }
}
