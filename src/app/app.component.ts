import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud';

  msg:string = '';

  employees = [{
    name: 'Fazt',
    position: 'Manager',
    email: 'WWW@.com'
  },{
    name: 'Pedro',
    position: 'Designer',
    email: 'WWWwwwwwwwwwwwwww@.com'
  },
  {
    name: 'Juan',
    position: 'Programer',
    email: 'WWW@.com'
  }];

  model:any = {

  }

  model2:any = {

  }
  hideUpdate:boolean = true;
  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'Campo agregado'
  }

  deleteEmployee(i):void{
    let answer = confirm('are you sure?')
    if(answer){
      this.employees.splice(i,1);
    }
    this.msg = 'Campo Borrado'
  }
  myvalue;

  editEmployee(i):void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    console.log(i)
    this.myvalue = i
  }

  updateEmployee():void{
    let i = this.myvalue;
    this.employees[i] = this.model2;
    this.model2 = {}
    this.msg = 'Campo Actualizado'
  }

  closeAlert():void{
    this.msg = ''
  }
}
