import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { UserTextService } from 'src/app/shared/services/user-text.service';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css'],
})
export class AddTextComponent implements OnInit {
  public myTitle = '';
  public myTextArea = '';

  constructor(public service: UserTextService) {}

  public saveText() {
    this.service.userText.Title = this.myTitle;
    this.service.userText.Text = this.myTextArea;
    this.service.userText.UserId = 1;
    console.log(this.service.userText);

    this.service.postUserText().subscribe(
      (res) => {},
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}
