import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  @ViewChild('contenitoreForm', { static: true }) contenitoreForm!: NgForm;

  userForm = {
    fName: '',
    fAlterEgo: '',
    fPower: '',
    fEnemy: '',
    fPlanet: '',
    fWeakness: ''
  }

  user: any = {
    name: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  }

  ngOnInit(): void {
    this.contenitoreForm.statusChanges?.subscribe(stato => {
    })
  }


  submitForm() {
    this.user.name = this.contenitoreForm.value.userInfo.name;
    this.user.alterEgo = this.contenitoreForm.value.userInfo.alterEgo;
    this.user.power = this.contenitoreForm.value.userInfo.power;
    this.user.enemy = this.contenitoreForm.value.userInfo.enemy;
    this.user.planet = this.contenitoreForm.value.userInfo.planet;
    this.user.weakness = this.contenitoreForm.value.userInfo.weakness;
    console.log(`Form inviato: ${JSON.stringify(this.user)}`);
    this.contenitoreForm.reset();
}
}
