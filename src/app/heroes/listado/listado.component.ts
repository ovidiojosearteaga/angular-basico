import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iron man', 'Thor', 'Hulk', 'Capitan America'];

  heroeBorrado:string = '';

  constructor() { }

  eliminarHeroe() : void {
    const heroe:string|undefined = this.heroes.shift();
    this.heroeBorrado = heroe || '';
  }

}
