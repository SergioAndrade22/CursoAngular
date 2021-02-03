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

  constructor(public chatService: ChatService) { }

  ingresar( provider: string): void {
    this.chatService.login(provider);
  }

}
