# Quiz jour 3

Ce quiz porte sur les notions vues lors de la 3ème journée.

Attention, pour certaines questions il peut y avoir zéro, une, ou plusieurs bonnes réponses, et peut être un piège.

## Quel Hook est appelé lors du premier chargement du composant?

* OnInit
* OnChanges
* DoCheck
* OnDestroy
## Quel Hook est appelé lors d'un changement de référence d'un Input ?

* OnInit
* OnChanges
* DoCheck
* OnDestroy

## Que va faire ce code ? (résultat console)

Typescript :

```typescript
@Component({
  selector: 'app-parent',
  template: `<app-enfant [data]="'world'"></app-enfant>`
})
export class ParentComponent 
  implements OnInit, OnDestroy  {

  @Input() data: string;

  constructor() {
    console.log('Parent::new');
  }

  ngOnInit(): void {
    console.log('Parent::init');
    console.log(this.data);
  }

  ngOnDestroy() {
    console.log('Parent::destroy');
  }
}

@Component({
  selector: 'app-enfant',
  template: `<p>whatever</p>`
})
export class EnfantComponent 
  implements OnInit, OnDestroy  {

  @Input() data: string;

  constructor() {
    console.log('Enfant::new');
  }

  ngOnInit(): void {
    console.log('Enfant::init');
    console.log(this.data);
  }

  ngOnDestroy() {
    console.log('Enfant::destroy');
  }
}

```

Html :

```html
<app-parent [data]="'Hello'"></app-parent>
```

## Quelle directive permet d'associer une variable à un controle dans les template-driven forms?

- NgControl
- NgModel
- FormControl
- NgInput

## Que fait Angular lorsqu'il détecte une balise "form"

- Rien
- Il instancie une directive
- Il instancie un composant
- Il instancie un service

## Citer une action de la directive NgForm

Réponse libre...


