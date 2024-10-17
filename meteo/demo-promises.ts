
let jeTePrometQueTaurasUnPainChoc = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) {
        resolve({cuisson: 'parfaite', croustillance: 'exceptionelle'})
    }
    else {
        reject("J'étais pas réveillé")
    }
});


/*

jeTePrometQueTaurasUnPainChoc.then(function(lePainChoc){
    console.log('Tu peux le manger', lePainChoc)
}, function(error){
    console.log("T'as pas eu le pain choc, raison :" , error)
})

console.log('Fin de programme')*/


async function main(){
    try {
        let lePainChoc = await jeTePrometQueTaurasUnPainChoc.then()
        console.log('Tu peux le manger', lePainChoc)
        let deuxiemePainchoc = await jeTePrometQueTaurasUnPainChoc.then()
    } catch(error){
        console.log("T'as pas eu le pain choc, raison :" , error)
    }
}

main()

