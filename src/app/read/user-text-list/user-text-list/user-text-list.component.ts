import { Component, OnInit } from '@angular/core';
import { UserText } from 'src/app/shared/models/user-text.model';
import { UserTextService } from 'src/app/shared/services/user-text.service';

@Component({
  selector: 'app-user-text-list',
  templateUrl: './user-text-list.component.html',
  styleUrls: ['./user-text-list.component.css'],
})
export class UserTextListComponent implements OnInit {
  userTexts: UserText[] = [];

  constructor(public service: UserTextService) {}

  public selectText(index: number) {
    this.service.selectedText = this.userTexts[index];
  }

  ngOnInit(): void {
    this.service.getUserTexts(1).subscribe((data) => {
      this.userTexts = data;
    });
  }
}
