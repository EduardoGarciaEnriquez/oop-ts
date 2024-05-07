import { Dog } from "../advanced/01-inheritance"

//función con tipado dinamico
//T es el tipado pasado como argumento a la función
function getValue<T>(value: T){
    return value
}

//tipado genérico específico
getValue<number>(23).toFixed()
getValue<string>('23').toLowerCase()
getValue<number[]>([1,2,3]).length

const chad = new Dog('Chad', 'Edgar')
getValue<Dog>(chad).name