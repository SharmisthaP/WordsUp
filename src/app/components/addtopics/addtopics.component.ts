import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-addtopics',
  templateUrl: './addtopics.component.html',
  styleUrls: ['./addtopics.component.css']
})
export class AddtopicsComponent implements OnInit {

  @Output() sendTopics: EventEmitter<string> =new EventEmitter();
  @Output() remove: EventEmitter<string> =new EventEmitter();
  topics:string[]; 
  newtopic:string;
  title:string="Add topics"
  constructor() {
    this.topics=new Array();
   }

  ngOnInit(): void {
  }
 
  addTopic(){
    this.topics.push(this.newtopic);
    console.log("from addtopics ");
    console.log(this.topics);
    this.sendTopics.emit(this.newtopic);
   
  }
  removeTopic(rem:string){
   this.topics=this.topics.filter(topic => topic != rem);
   console.log(this.topics);
   this.remove.emit(rem);
  }

}
