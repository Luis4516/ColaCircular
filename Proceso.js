export default class Proceso{
    constructor(){
        this._duracion = this._duracion();
        this._siguiente = null;
        this._anterior = null;
    }
    //GetAndSet
    get siguiente(){
        return this._siguiente;
    }
    set siguiente(newSiguiente){
        this._siguiente = newSiguiente;
        return this._siguiente;
    }
    get anterior(){
        return this._anterior;
    }
    set anterior(newAnterior){
        this._anterior = newAnterior;
        return this._anterior;
    }
    get duracion(){
        return this._duracion;
    }
    set duracion(newDuracion){
        this._duracion = newDuracion;
        return this._duracion;
    }
    _duracion() {
        let duracion = Math.trunc(Math.random()*11+4);
        return duracion;
    }   
}