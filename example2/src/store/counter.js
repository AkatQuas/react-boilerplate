import { action, computed, observable } from 'mobx';

class CounterModel {
    @observable counter = 0;

    @computed get howFarFrom100 () {
        const { counter } = this;
        const res = 100 - counter;
        return res > 0 ? `the gap is ${res}` : 'already beyond';
    }

    @action
    increment (step) {
        const { counter } = this;
        this.counter = counter + (step ? step : 20);
    }
}

const store = new CounterModel();

export default store;

