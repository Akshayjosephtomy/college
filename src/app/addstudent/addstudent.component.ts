import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  name=""
  no=""
  college=""
  adm=""
  pname=""
  dob=""
  address=""
  mobile=""
  pmobile=""
  email=""
  blood=""

  readValue=()=>{
    let data={
      "name":this.name,
      "no":this.no,
      "adm":this.adm,
      "pname":this.pname,
      "dob":this.dob,
      "address":this.address,
      "mobile":this.mobile,
      "pmobile":this.pmobile,
      "email":this.email,
      "blood":this.blood
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
