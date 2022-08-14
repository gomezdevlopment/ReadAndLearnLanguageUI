import { Injectable } from '@angular/core';
import { UserText } from '../models/user-text.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserTextService {
  constructor(public client: HttpClient) {}

  userText: UserText = new UserText();
  selectedText: UserText = new UserText();

  readonly baseUrl = 'https://localhost:7041/api/UserText';

  postUserText() {
    return this.client.post(this.baseUrl, this.userText);
  }

  getUserTexts(userId: number): Observable<UserText[]> {
    return this.client.get<UserText[]>(this.baseUrl + '/' + userId);
  }
}
