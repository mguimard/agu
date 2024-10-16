import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [],
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.css'
})
export class VoitureComponent {

  @Input() peutDemarrer : boolean = false;
  @Output() passeLaLigne : EventEmitter<void> = new EventEmitter<void>();

  constructor(){
    setTimeout(() => {
      console.log('Voiture fini')
      this.passeLaLigne.emit();
    }, 2000 +  Math.random() * 10000)
  }

}
