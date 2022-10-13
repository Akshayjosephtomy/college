import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchstuddent',
  templateUrl: './searchstuddent.component.html',
  styleUrls: ['./searchstuddent.component.css']
})
export class SearchstuddentComponent implements OnInit {

  constructor() { }
  name=""
  readValue=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
