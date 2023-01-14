
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title="Registro de Personas";

  model = {name: '', dni: '', estado_civil: ''}
  datos = '';
 
  ngOnInit(): void {
  }

  onSubmit(values: any): void {
    this.datos = values;
    console.log('Form values', values);
  }

  
}
