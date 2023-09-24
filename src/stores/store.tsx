import { makeAutoObservable } from 'mobx';

class Store {
  teamScores: Record<number, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  incrementScore(team: number, points: number) {
    this.teamScores[team] += points;
  }
}

const store = new Store();
export default store;
