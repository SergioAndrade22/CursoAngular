import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent {

  form: FormGroup;

  user = {
    nombreCompleto: {
      nombre: "Sergio",
      apellido: "Andrade"
    },
    mail: "mail@mail.com",
    hobbies: []
  }

  constructor() { 
    this.form = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [
                                        Validators.required, 
                                        Validators.minLength(3)
                                      ]
        ),
        'apellido': new FormControl('', [
                                          Validators.required   
                                        ]
        )
      }),
      'mail': new FormControl('', [
                                    Validators.required, 
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                  ]
        ),
      'hobbies': new FormArray([]),
      'username': new FormControl('', Validators.required, this.existeUsername),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('')
    });

    this.form.get('password2').setValidators([
      this.noIgual.bind(this.form),
      Validators.required
    ]);

    // listen to changes on specific FormControl
    this.form.get('username').valueChanges.subscribe(data => console.log(data))

    // listen to changes on the status of a FormControl
    this.form.get('username').statusChanges.subscribe(data => console.log(data))

    // listen for changes in every field of the form
    //this.form.valueChanges.subscribe( data => console.log(data))

    // this.form.setValue(this.user);
  }

  guardarCambios(){
    console.log(this.form.value);
    console.log(this.form);
    // this.form.reset({
    //   nombreCompleto: {
    //     nombre: null,
    //     apellido: null
    //   },
    //   mail: null,
    //   hobbies:[]
    // });
  }

  agregarPasatiempo(){
   (<FormArray>this.form.get('hobbies')).push(
     new FormControl('', Validators.required)
   )
  }

  // custom validation
  noIgual(control: FormControl): {[s: string]: boolean}{
    let form:any = this

     if(control.value !== form.get('password1').value){
       return {
         noiguales: true
       }
     }

     return null;
  }

  //async validation
  existeUsername(control: FormControl): Promise<any>|Observable<any>{
      let promise = new Promise(
        (resolve, reject) => {
          setTimeout(()=>{
            if (control.value === "Hosuseri"){
              resolve({existe: true})
            } else{
              resolve(null)
            }
          }, 3000)
      });
      return promise;
  }
}
