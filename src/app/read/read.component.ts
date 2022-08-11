import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public myTitle = ""
  public myTextArea = ""

  public saveText() {
    console.log(this.myTitle)
    console.log(this.myTextArea)
  }

  ngOnInit(): void {
  }

}
