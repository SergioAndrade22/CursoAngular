import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-editar-marcador',
  templateUrl: './editar-marcador.component.html',
  styles: [
  ]
})
export class EditarMarcadorComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditarMarcadorComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public formBuilder: FormBuilder) { 
    this.form = formBuilder.group({
      'titulo': data.titulo,
      'desc': data.desc
    })
  }

  ngOnInit(): void {
  }

  guardarCambios(){
    this.dialogRef.close(this.form.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
