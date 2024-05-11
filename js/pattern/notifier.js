export class Notifier{
    #observers;

    constructor(){
        this.#observers = [];
    }

    get observers(){
        return this.#observers;
    }

    set observers(value){
        this.#observers = value;
    }

    addObserver(observer){
        this.observers.push(observer);
    }

    notify(){
        this.observers.forEach(observer => {
            observer.notify();
        });
    }
}