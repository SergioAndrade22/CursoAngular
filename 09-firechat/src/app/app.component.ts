import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firechat';

  chats: Observable<any[]>;

  constructor(private db: AngularFirestore){
    this.chats = db.collection('chats').valueChanges();
    console.log(this.chats);
  }
}
