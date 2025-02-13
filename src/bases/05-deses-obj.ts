interface Heroes {
    nombre: string;
    edad: number;
    codeName: string;
    poder: string;
}

export const persona: Heroes = {
    nombre: "Juan",
    edad: 45,
    codeName: "Juanito",
    poder: "volar"
}

const { nombre, edad, poder = "No tiene poder" } = persona;
console.log(nombre, edad, poder);
