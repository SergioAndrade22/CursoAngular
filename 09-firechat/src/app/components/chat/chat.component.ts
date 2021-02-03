import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit{

  mensaje = '';
  elem: any;

  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes()
      .subscribe( () => {
        setTimeout(this.elem.scrollTop = this.elem.scrollHeight, 20);
      });
  }

  ngOnInit(): void  {
    this.elem = document.getElementById('app-mensajes');
  }

  enviarMensaje(): void {
    if (this.mensaje.length !== 0){
      this.chatService.agregarMensaje(this.mensaje)
            .then(() => {
              console.log('Mensaje Enviado');
              this.mensaje = '';
            })
            .catch((err) => console.error('Error al enviar. \n', err));
    }
  }
}
