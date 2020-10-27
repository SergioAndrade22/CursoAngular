import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    button{
      margin: 2px;
    }
  `]
})
export class LoginComponent {

  constructor(public _chatService: ChatService) { }

  ingresar( provider: string): void {
    this._chatService.login(provider);
  }

}
