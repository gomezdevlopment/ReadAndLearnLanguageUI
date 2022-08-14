import { Component, Input, OnInit } from '@angular/core';
import { UserText } from 'src/app/shared/models/user-text.model';
import { UserTextService } from 'src/app/shared/services/user-text.service';

@Component({
  selector: 'app-user-text',
  templateUrl: './user-text.component.html',
  styleUrls: ['./user-text.component.css'],
})
export class UserTextComponent implements OnInit {
  text: UserText = new UserText();
  constructor(public service: UserTextService) {}

  ngOnInit(): void {
    this.text = this.service.selectedText;
  }
}
