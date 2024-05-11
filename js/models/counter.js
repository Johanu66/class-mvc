export class Counter{
    #value;
    constructor(){
        this.value = 0;
    }

    get value(){
        return this.#value;
    }

    set value(value){
        this.#value = value;
    }

    increment(){
        this.#value++;
    }

    decrement(){
        this.#value--;
    }
}