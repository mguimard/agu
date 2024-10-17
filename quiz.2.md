# Quiz Angular

Ce quiz porte sur les notions de base TypeScript/Angular.

Attention, pour certaines questions il peut y avoir zéro, une, ou plusieurs bonnes réponses.

## Qui est responsable d'appeler le constructeur 'new MyService()' dans cette portion de code?

```typescript
@Component(...)
class MyComponent {
    constructor(private service: MyService){}
}
```

## Quelles sont les bonnes syntaxe de template 

* `<p><%user.name%></p>`
* `<p>{{user.name}}</p>`
* `<p>{user.name}</p>`
* `<p>{{user->name}}</p>`

---

## Quelle est l'annotation pour définir une entrée de composant

* @Data()
* @Input()
* @Inputs()
* @Bind()

---


## Quelle est l'annotation pour émettre un évenement dans un composant

* @Event()
* @Emitter()
* @Output()
* @EventBinding()

---

## Quel est le résultat de ce code

```typescript
@Component({
  selector: 'app-root',
  template: '<app-root></app-root>'
})
export class AppComponent {
}
```

* Aucun résultat, erreur lors de la transpilation
* "Type Error: 'app-root' isn't a known element"
* "Uncaught Error: Buffer overflow"
* "RangeError: Maximum call stack size exceeded"

## Combien de messages il y aura-t'il dans la console ?

```typescript
// my-service.js
@Injectable()
export class MyService {
  constructor(){
    console.log('Hello my service');
  }
}

// hello-component.js
@Component({
  selector: 'app-hello',
  template: '<p>hello</p>',
  providers: [MyService]
})
export class HelloComponent {
  constructor(private service: MyService){}
}

// bye-component.js
@Component({
  selector: 'app-bye',
  template: '<p>bye</p>',
  providers: [MyService]
})
export class ByeComponent {
  constructor(private service: MyService){}
}

// index.html
<app-hello></app-hello>
<app-bye></app-bye>
```
