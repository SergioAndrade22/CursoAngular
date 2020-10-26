import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent{

  mensaje:string = '';

  constructor(public _chatService: ChatService) { 
    this._chatService.cargarMensajes()
      .subscribe();
  }

  enviarMensaje(){
    console.log(this.mensaje);

    if (this.mensaje.length === 0){
      return;
    }

    this._chatService.agregarMensaje(this.mensaje)
          .then(() => {
            console.log("Mensaje Enviado");
            this.mensaje = "";
          })
          .catch((err) => console.error("Error al enviar. \n", err));
  }
}
