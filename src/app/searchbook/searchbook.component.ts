import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../Services/reader.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private apiService:ReaderService) { }
  iconWidth:number=65;
  iconMargin:number=5;
  searchbook:any={
    price:"",
    category:"",
    publisher:""
  }
  resp:any={};
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.apiService.searchBook(this.searchbook).subscribe(response=>{this.resp= response});    
  }
}
