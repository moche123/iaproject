
var canvas;
var ctx;
var FPS = 150;

//ESCENARIO / TABLERO
var columnas = 16;
var filas = 16;
var escenario;  //matriz del nivel

//TILES
var anchoT;
var altoT;

const muro = 'darkred';
const tierra = 'greenyellow';


//RUTA
var principio;
var fin;

var openSet = [];
var closedSet = [];

var camino = [];
var terminado = false;
var interval;


export function iniVariables() {


    escenario = [];

    //TILES
    anchoT = 0;
    altoT = 0;




    //RUTA
    principio = undefined;
    fin = undefined;

    
    openSet = [];
    closedSet = [];
    camino = [];
  

    terminado = false;
    clearInterval(interval);


}

//CREAMOS UN ARRAY 2D
export function creaArray2D(f, c) {
    var obj = new Array(f);
    for (let a = 0; a < f; a++) {
        obj[a] = new Array(c);
    }
    return obj;
}



export function heuristica(a, b) {
    var x = Math.abs(a.x - b.x);
    var y = Math.abs(a.y - b.y);

    var dist = x + y;

    return dist;
}


export function borraDelArray(array, elemento) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === elemento) {
            array.splice(i, 1);
        }
    }
}


export function Casilla2(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.tipo = tipo;

    //TIPO (obstáculo=1, vacío=0)
    //this.tipo = 0;

    //PESOS
    this.f = 0;  //coste total (g+h)
    this.g = 0;  //pasos dados
    this.h = 0;  //heurística (estimación de lo que queda)

    this.vecinos = [];
    this.padre = null;

    //MÉTODO QUE CALCULA SUS VECNIOS
    this.addVecinos = function () {
        if (this.x > 0)
            this.vecinos.push(escenario[this.y][this.x - 1]);   //vecino izquierdo

        if (this.x < filas - 1)
            this.vecinos.push(escenario[this.y][this.x + 1]);   //vecino derecho

        if (this.y > 0)
            this.vecinos.push(escenario[this.y - 1][this.x]);   //vecino de arriba

        if (this.y < columnas - 1)
            this.vecinos.push(escenario[this.y + 1][this.x]); //vecino de abajo
    }



    //MÉTODO QUE DIBUJA LA CASILLA
    this.dibuja = function () {
        var color;

        if (this.tipo === 0)
            color = tierra;

        if (this.tipo === 1)
            color = muro;

        //DIBUJAMOS EL CUADRO EN EL CANVAS
        ctx.fillStyle = color;
        ctx.fillRect(this.x * anchoT, this.y * altoT, anchoT, altoT);
    }



    //DIBUJA OPENSET
    this.dibujaOS = function () {
        ctx.fillStyle = '#CCFFCC';
        ctx.fillRect(this.x * anchoT, this.y * altoT, anchoT, altoT);

    }

    //DIBUJA CLOSEDSET
    this.dibujaCS = function () {
        ctx.fillStyle = 'cyan';
        ctx.fillRect(this.x * anchoT, this.y * altoT, anchoT, altoT);
    }


    //DIBUJA CAMINO
    this.dibujaCamino = function () {
        ctx.fillStyle = 'black';  //cyan
        ctx.fillRect(this.x * anchoT, this.y * altoT, anchoT, altoT);
    }

}


export function Casilla(x, y) {

    //POSICIÓN
    this.x = x;
    this.y = y;

    //TIPO (obstáculo=1, vacío=0)
    this.tipo = 0;

    var aleatorio = Math.floor(Math.random() * 5);  // 0-4   (2.3.4 : VACIOS)
    if (aleatorio === 1)
        this.tipo = 1;

    //PESOS
    this.f = 0;  //coste total (g+h)
    this.g = 0;  //pasos dados
    this.h = 0;  //heurística (estimación de lo que queda)

    this.vecinos = [];
    this.padre = null;


    //MÉTODO QUE CALCULA SUS VECNIOS
    this.addVecinos = function () {
        if (this.x > 0)
            this.vecinos.push(escenario[this.y][this.x - 1]);   //vecino izquierdo

        if (this.x < filas - 1)
            this.vecinos.push(escenario[this.y][this.x + 1]);   //vecino derecho

        if (this.y > 0)
            this.vecinos.push(escenario[this.y - 1][this.x]);   //vecino de arriba

        if (this.y < columnas - 1)
            this.vecinos.push(escenario[this.y + 1][this.x]); //vecino de abajo
    }



    //MÉTODO QUE DIBUJA LA CASILLA
    this.dibuja = function () {
        var color;

        if (this.tipo === 0)
            color = tierra;

        if (this.tipo === 1)
            color = muro;

        //DIBUJAMOS EL CUADRO EN EL CANVAS
        ctx.fillStyle = color;
        ctx.fillRect(this.x * anchoT, this.y * altoT, anchoT, altoT);
    }



    //DIBUJA OPENSET
    this.dibujaOS = function () {
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x * anchoT, this.y * altoT, anchoT, altoT);

    }

    //DIBUJA CLOSEDSET
    this.dibujaCS = function () {
        ctx.fillStyle = 'cyan';
        ctx.fillRect(this.x * anchoT, this.y * altoT, anchoT, altoT);
    }


    //DIBUJA PATH
    this.dibujaCamino = function () {
        ctx.fillStyle = 'black';  //cyan
        ctx.fillRect(this.x * anchoT, this.y * altoT, anchoT, altoT);
    }


}



export function inicializa() {
    iniVariables();
    fetch('http://localhost:4000/api/obstacle/all')
        .then(response => response.json())
        .then(data => {
            canvas = document.getElementById('canvas');
            ctx = canvas.getContext('2d');

            //CALCULAMOS EL TAMAÑO DE LOS TILES (Proporcionalmente)
            anchoT = parseInt(canvas.width / columnas);
            altoT = parseInt(canvas.height / filas);

            //CREAMOS LA MATRIZ
            escenario = creaArray2D(filas, columnas);

            //AÑADIMOS LOS OBJETOS CASILLAS
            for (let i = 0; i < filas; i++) {
                for (let j = 0; j < columnas; j++) {
                    escenario[i][j] = new Casilla2(j, i, 0)
                }
            }





            data.forEach(e => {
                escenario[filas - e.posx][e.posy] = new Casilla2(e.posy, filas - e.posx, 1)
            });

            //AÑADIMOS LOS VECINOS

            for (let i = 0; i < filas; i++) {
                for (let j = 0; j < columnas; j++) {

                    escenario[i][j].addVecinos();
                }
            }

            //CREAMOS ORIGEN Y DESTINO DE LA RUTA
            principio = escenario[0][0];
            //fin = escenario[columnas-1][filas-1];
            fin = escenario[7][7];
            //INICIALIZAMOS OPENSET
            openSet.push(principio);

            //EMPEZAMOS A EJECUTAR EL BUCLE PRINCIPAL
            interval = setInterval(() => principal(), 1000 / FPS);
        });

}



export function dibujaEscenario() {
    //console.log(escenario)
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            escenario[i][j].dibuja();
        }
    }

    //DIBUJA OPENSET
    for (let i = 0; i < openSet.length; i++) {
        openSet[i].dibujaOS();
    }


    //DIBUJA CLOSEDSET
    for (let i = 0; i < closedSet.length; i++) {
        closedSet[i].dibujaCS();
    }

    for (let i = 0; i < camino.length; i++) {
        camino[i].dibujaCamino();
    }



}


// export function borraCanvas() {
//     canvas.width = canvas.width;
//     canvas.height = canvas.height;
// }






export function algoritmo() {

    //SEGUIMOS HASTA ENCONTRAR SOLUCIÓN
    if (terminado !== true) {

        //SEGUIMOS SI HAY AlGO EN OPENSET
        if (openSet.length > 0) {
            var ganador = 0;  //índie o posición dentro del array openset del ganador

            //evaluamos que OpenSet tiene un menor coste / esfuerzo

            for (let i = 0; i < openSet.length; i++) {
                if (openSet[i].f < openSet[ganador].f) {
                    ganador = i;
                }
            }

            //Analizamos la casilla ganadora
            var actual = openSet[ganador];

            //SI HEMOS LLEGADO AL FINAL BUSCAMOS EL CAMINO DE VUELTA
            if (actual === fin) {

                var temporal = actual;
                camino.push(temporal);

                while (temporal.padre !== null) {
                    temporal = temporal.padre;
                    camino.push(temporal);
                }



                terminado = true;
            }

            //SI NO HEMOS LLEGADO AL FINAL, SEGUIMOS
            else {

                borraDelArray(openSet, actual);
                closedSet.push(actual);



                var vecinos = actual.vecinos;

                //RECORRO LOS VECINOS DE MI GANADOR
                for (let i = 0; i < vecinos.length; i++) {
                    var vecino = vecinos[i];

                    //SI EL VECINO NO ESTÁ EN CLOSEDSET Y NO ES UNA PARED, HACEMOS LOS CÁLCULOS
                    if (!closedSet.includes(vecino) && vecino.tipo !== 1) {
                        var tempG = actual.g + 1;

                        //si el vecino está en OpenSet y su peso es mayor
                        if (openSet.includes(vecino)) {
                            if (tempG < vecino.g) {
                                vecino.g = tempG;     //camino más corto
                            }
                        }
                        else {
                            vecino.g = tempG;
                            openSet.push(vecino);
                        }

                        //ACTUALIZAMOS VALORES
                        vecino.h = heuristica(vecino, fin);
                        vecino.f = vecino.g + vecino.h;

                        //GUARDAMOS EL PADRE (DE DÓNDE VENIMOS)
                        vecino.padre = actual;

                    }

                }


            }





        }

        else {

            terminado = true;   //el algoritmo ha terminado
        }



    }

}



export function principal() {
    // borraCanvas();
    algoritmo();
    dibujaEscenario();
}
