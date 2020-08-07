import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  topics:string[];  
  title:string="Create document";
  constructor() { 
    this.topics=new Array();
  }

  ngOnInit(): void {
  }

  //get topics
  getTopics(newtopic:string){
    this.topics.push(newtopic);
  }
  removeTopic(rem:string){
    this.topics=this.topics.filter(topic => topic != rem);
  
  }
}
