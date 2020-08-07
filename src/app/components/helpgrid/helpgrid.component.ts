import { Component, OnInit,Input } from '@angular/core';
import {FetchDataService} from '../../services/fetch-data.service';
import {Result } from "../../models/Results";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-helpgrid',
  templateUrl: './helpgrid.component.html',
  styleUrls: ['./helpgrid.component.css']
})
export class HelpgridComponent implements OnInit {

  
  @Input() gettopics: string[];

  phrase:string;
  noun:string;
  adjective:string;
  hypernym:string;
  hyponym:string;
  rhyme:string;
  trigger:string;
  homophone:string;
  phrase_results:Result[];
  noun_results:Result[];
  adjective_results:Result[];
  hypernym_results:Result[];
  hyponym_results:Result[];
  rhyme_results:Result[];
  trigger_results:Result[];
  homophone_results:Result[];

  constructor(private fetchService:FetchDataService) { this.phrase_results=new Array();}
  ngOnInit(): void {
  }
  //@ViewChild('collapsible') elCollapsible: ElementRef;
  ngAfterViewInit() {
   // let instanceCollapsible = new M.Collapsible(this.elCollapsible.nativeElement, {accordion: false});
   M.AutoInit();
  }

  getMeansLike()
  {
    var words = this.phrase.split(" ");
    
    console.log(words);
    console.log(this.gettopics);
    this.fetchService.meansLike(words,this.gettopics)
    .subscribe(results => {
      console.log(results);
      this.phrase_results=results;
      console.log(this.phrase_results);
    });
    
  }
  checkPhrase():boolean{
    
    if(this.phrase==='')
    {
      this.phrase_results.length=0;
      return false;
    }
    else 
     return true;
  }

  //adjectives for noun
  getAdjectives()
  {
    
    this.fetchService.adjectives(this.noun,this.gettopics)
    .subscribe(results => {
      console.log(results);
      this.noun_results=results;
      console.log(this.noun_results);
    });
    
  }
  checkNoun():boolean{
    
    if(this.noun==='')
    {
      this.noun_results.length=0;
      return false;
    }
    else 
     return true;
  }
  //nouns for adjectives
  getNouns()
  {
    
    this.fetchService.nouns(this.adjective,this.gettopics)
    .subscribe(results => {
      this.adjective_results=results;
      console.log(this.adjective_results);
    });
    
  }
  checkAdjective():boolean{
    
    if(this.adjective==='')
    {
      this.adjective_results.length=0;
      return false;
    }
    else 
     return true;
  }

  //hypernyms
  getHypernyms()
  {
    
    this.fetchService.hypernyms(this.hypernym,this.gettopics)
    .subscribe(results => {
      this.hypernym_results=results;
      console.log(this.hypernym_results);
    });
    
  }
  checkHypernym():boolean{
    
    if(this.hypernym==='')
    {
      this.hypernym_results.length=0;
      return false;
    }
    else 
     return true;
  }
//hyponyms
  getHyponyms()
  {
    
    this.fetchService.hyponyms(this.hyponym,this.gettopics)
    .subscribe(results => {
      this.hyponym_results=results;
      console.log(this.hyponym_results);
    });
    
  }
  checkHyponym():boolean{
    
    if(this.hyponym==='')
    {
      this.hyponym_results.length=0;
      return false;
    }
    else 
     return true;
  }
//rhymes
getRhymes()
{
  
  this.fetchService.rhymes(this.rhyme,this.gettopics)
  .subscribe(results => {
    this.rhyme_results=results;
    console.log(this.rhyme_results);
  });
  
}
checkRhyme():boolean{
  
  if(this.rhyme==='')
  {
    this.rhyme_results.length=0;
    return false;
  }
  else 
   return true;
}
//triggers
getTriggers()
{
  
  this.fetchService.triggers(this.trigger,this.gettopics)
  .subscribe(results => {
    this.trigger_results=results;
    console.log(this.trigger_results);
  });
  
}
checkTrigger():boolean{
  
  if(this.trigger==='')
  {
    this.trigger_results.length=0;
    return false;
  }
  else 
   return true;
}
getHomophones()
{
  
  this.fetchService.homophones(this.homophone,this.gettopics)
  .subscribe(results => {
    this.homophone_results=results;
    console.log(this.homophone_results);
  });
  
}
checkHomophone():boolean{
  
  if(this.homophone==='')
  {
    this.homophone_results.length=0;
    return false;
  }
  else 
   return true;
}
}
