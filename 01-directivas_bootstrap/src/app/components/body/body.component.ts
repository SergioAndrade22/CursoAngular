import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent{
    // used for ngIf directive
    render_card:boolean = true;

    phrase:any = {
        message: 'Un gran poder conlleva una gran responsabilidad',
        author: 'Ben Parker'
    };

    // used for ngFor directive
    characters:string[] = ['Spiderman', 'Venom', 'Dr. Octopus']
}