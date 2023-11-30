//FOTOS PAPEL BRILLANTE POR UNIDAD
let fotosPapelBrillanteUnidad = [
    {id: 0, nombre: "fotos", tamaño: "10x15cm.", papel: "brillante", valor_unidad: 500},
    {id: 1, nombre: "fotos", tamaño: "13x18cm.", papel: "brillante", valor_unidad: 750},  
    {id: 2, nombre: "fotos", tamaño: "15x21cm.", papel: "brillante", valor_unidad: 950},  
    {id: 3, nombre: "fotos", tamaño: "20x25cm.", papel: "brillante", valor_unidad: 1500},  
    {id: 4, nombre: "fotos", tamaño: "21x30cm.", papel: "brillante", valor_unidad: 2000}  
]
//FOTOS 10x15cm PAPEL BRILLANTE POR CANTIDADES
let fotos10x15 = [
    {id: 0, nombre: "foto 10x15cm.", cantidad: 1, precio: 500, papel: "Brillante"},
    {id: 1, nombre: "fotos 10x15cm.", cantidad: 20, precio: 3500, papel: "Brillante"},
    {id: 2, nombre: "fotos 10x15cm.", cantidad: 50, precio: 6000, papel: "Brillante"},
    {id: 3, nombre: "fotos 10x15cm.", cantidad: 100, precio: 10000, papel: "Brillante"}
]
//FOTOS 13x18cm PAPEL BRILLANTE POR CANTIDADES
let fotos13x18 = [
    {id: 0, nombre: "foto 13x18cm.", cantidad: 1, precio: 700, papel: "Brillante"},
    {id: 1, nombre: "fotos 13x18cm.", cantidad: 20, precio: 4500, papel: "Brillante"},
    {id: 2, nombre: "fotos 13x18cm.", cantidad: 50, precio: 7000, papel: "Brillante"},
    {id: 3, nombre: "fotos 13x18cm.", cantidad: 100, precio: 12000, papel: "Brillante"}
]
//FOTOS 15x21cm PAPEL BRILLANTE POR CANTIDADES
let fotos15x21 = [
    {id: 0, nombre: "foto 15x21cm.", cantidad: 1, precio: 850, papel: "Brillante"},
    {id: 1, nombre: "fotos 15x21cm.", cantidad: 10, precio: 5000, papel: "Brillante"},
    {id: 2, nombre: "fotos 15x21cm.", cantidad: 25, precio: 9000, papel: "Brillante"},
    {id: 3, nombre: "fotos 15x21cm.", cantidad: 50, precio: 14000, papel: "Brillante"}
]
//FOTOS 20x25cm PAPEL BRILLANTE POR CANTIDADES
let fotos20x25 = [
    {id: 0, nombre: "foto 20x25cm.", cantidad: 1, precio: 1500, papel: "Brillante"},
    {id: 1, nombre: "fotos 20x25cm.", cantidad: 5, precio: 5500, papel: "Brillante"},
    {id: 2, nombre: "fotos 20x25cm.", cantidad: 10, precio: 10000, papel: "Brillante"},
    {id: 3, nombre: "fotos 20x25cm.", cantidad: 30, precio: 17000, papel: "Brillante"}
]
//FOTOS 21x30cm PAPEL BRILLANTE POR CANTIDADES
let fotos21x30 = [
    {id: 0, nombre: "foto 21x30cm.", cantidad: 1, precio: 2000, papel: "Brillante"},
    {id: 1, nombre: "fotos 21x30cm.", cantidad: 10, precio: 14000, papel: "Brillante"},
    {id: 2, nombre: "fotos 21x30cm.", cantidad: 30, precio: 25000, papel: "Brillante"}
]

const fotosPapelBrillante = {
    fotosPapelBrillanteUnidad,
    fotos10x15,
    fotos13x18,
    fotos15x21,
    fotos20x25,
    fotos21x30
}

//URL A LA IMAGEN MINIATURA
let fotosImg = "/public/resources/images/fotosMiniatura.png";

let fotosPapelMatte = [
    {id: 0, nombre: "fotos", tamaño: "10x15cm.", papel: "matte", valor_unidad: 600},
    {id: 1, nombre: "fotos", tamaño: "13x18cm.", papel: "matte", valor_unidad: 850},  
    {id: 2, nombre: "fotos", tamaño: "15x21cm.", papel: "matte", valor_unidad: 1100},  
    {id: 3, nombre: "fotos", tamaño: "20x25cm.", papel: "matte", valor_unidad: 1600},  
    {id: 4, nombre: "fotos", tamaño: "21x30cm.", papel: "matte", valor_unidad: 2200}  
]
let fotosPapelSatinado = [
    {id: 0, nombre: "fotos", tamaño: "10x15cm.", papel: "satinado", valor_unidad: 700},
    {id: 1, nombre: "fotos", tamaño: "13x18cm.", papel: "satinado", valor_unidad: 950},  
    {id: 2, nombre: "fotos", tamaño: "15x21cm.", papel: "satinado", valor_unidad: 1300},  
    {id: 3, nombre: "fotos", tamaño: "20x25cm.", papel: "satinado", valor_unidad: 1500},  
    {id: 4, nombre: "fotos", tamaño: "21x30cm.", papel: "satinado", valor_unidad: 2000}  
]


export {fotosPapelBrillante, fotosImg};