import {Counter} from "../models/counter.js";
import {Notifier} from "../pattern/notifier.js";

export class Controller extends Notifier{
    #counter;

    constructor(){
        super();
        this.#counter = new Counter();
    }

    get counter(){
        return this.#counter;
    }

    set counter(value){
        this.#counter = value;
    }

    incrementCounter(){
        this.counter.increment();
        this.notify();
    }

    decrementCounter(){
        this.counter.decrement();
        this.notify();
    }

    getCounterValue(){ 
        return this.counter.value;
    }
}