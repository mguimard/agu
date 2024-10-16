function ClassAnotation(constructor:Function){
    console.log("ClassAnotation")

  console.log(constructor)
}

function Track() {
    console.log("Track(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("Track(): called");
    };
  }

@ClassAnotation
class Voiture {
    @Track()
    roule() {

    }
}

console.log('begin')
let twingo = new Voiture()
let clio = new Voiture()

clio.roule()
clio.roule()
