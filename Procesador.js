import Proceso from "./Proceso.js"
export default class Procesador{
    constructor(){
        this._cola = null;
    }
    //GetAndSet
    get cola(){
        return this._cola;
    }
    set cola(newProceso){
        this._cola = newProceso;
        return this._cola;
    }

    procesosR(){
        let pTerminados = 0;
        let cVacios = 0;
        let pTotales = 0;

        for(let i = 0; i <=300; i++){
            let nProceso = this._newProceso();
            if(nProceso != null){
                this._enqueue(nProceso);
                pTotales++;
                console.log(nProceso);
            }

            if(this._cola == null){
                cVacios++;
            }

            if(this._cola != null){
                this._cola.duracion--

            if(this._cola.duracion == 0){
                this._cola.anterior.siguiente = this._cola.siguiente;
                this._cola.siguiente.anterior = this._cola.anterior;
                this._cola = this._cola.siguiente;
                    proccessSuccesfull++;
                }else{
                    this._cola = this._cola.siguiente;
                }
            }
            if(this._cola = null) {
                cVacios++;
            }
        }

        let ciclosRestantes = 0;
        let procesosRestantes = 0;

        let c = this._cola;

        while(c != this._cola.siguiente){
            ciclosRestantes += this._cola.duracion;
            procesosRestantes++;
            this._cola = this._cola.siguiente;
        }
        
        console.log(pTotales + " Procesos totales");
        console.log(pTerminados + " Procesos terminados");
        console.log(procesosRestantes + " En cola");
        console.log(ciclosRestantes + " Ciclos restantes");
        console.log(cVacios + " Ciclos sin atender un proceso");
    }

    _enqueue(proceso){
        if(this._cola == null){
            this._cola = proceso;
            this._cola.siguiente = proceso;
            this._cola.anterior = proceso;
        }else{
            let n = this._cola;

            while(n.siguiente != this._cola){
                n = n.siguiente;
            }

            n.siguiente = proceso;
            this._cola.anterior = proceso;
            proceso.anterior = n;
            proceso.siguiente = this._cola;
        }
    }

    _newProceso(){
        let posibilidad = this._probabilidad();
        if(posibilidad <= 39){
            let proceso = new Proceso();
            this._pTotales++;
            return proceso;
        }else{
            return;
        }
    }

    _probabilidad(){
        let probabilidad = Math.trunc((Math.random()*100+1));
        return probabilidad;
    } 
}

