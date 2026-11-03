/**
 * Common Observer-Subscriber pattern.
 * This example aims to mimick the foundation block for reactive programming paradigm.
 * It also takes inspiration from RxJS' Observable pattern.
 */
class Observable<T> {
  private _observers: Map<symbol, Observer<T>> = new Map();

  public subscribe = (callback: Observer<T>): Subscription => {
    const id = Symbol();
    this._observers.set(id, callback);

    return {
      unsubscribe: () => {
        this._observers.delete(id);
      },
    };
  };

  public next(data: T): void {
    for (const sub of this._observers) {
      try {
        sub[1].next(data);
      } catch (e) {
        if (sub[1].error) sub[1].error(e);
        this.error(sub[0]);
      }
    }
  }

  private error(key: symbol) {
    this._observers.delete(key);
  }
}

type Observer<T> = {
  next: (data: T) => any;
  error?: (err: unknown) => any;
};
type Subscription = { unsubscribe: () => void };

const obs: Observable<string> = new Observable();

const sub = obs.subscribe({
  next: () => {
    throw new Error('oops');
  },
  error: (err) => {
    console.error(err);
  },
});
const sub2 = obs.subscribe({
  next: (data) => {
    console.log(data);
  },
  error: (err) => {
    console.error(err);
  },
});
const sub3 = obs.subscribe({
  next: (data) => {
    console.log(data);
  },
  error: (err) => {
    console.error(err);
  },
});

obs.next('hi');
sub.unsubscribe();
sub3.unsubscribe();
obs.next('bye');
sub2.unsubscribe();
