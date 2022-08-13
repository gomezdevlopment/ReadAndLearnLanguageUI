import { Injectable } from '@angular/core';
import { UserText } from '../models/user-text.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserTextService {
  constructor(public client: HttpClient) {}

  userText: UserText = new UserText();

  readonly baseUrl = 'https://localhost:7041/api/UserText';
  postUserText() {
    return this.client.post(this.baseUrl, this.userText);
  }
}
