type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

class FilterBuilder<T, K extends keyof T = keyof T> {
  private _conditions: Partial<{ [P in keyof T]: T[P] }> = {};
  private _data: T[] = [];
  private _selected?: K[];

  constructor(data?: T[]) {
    if (data) this._data = data;
  }

  public where(field: keyof T, value: T[keyof T]) {
    this._conditions[field] = value;
    return this;
  }

  public select<KS extends keyof T>(...fields: KS[]): FilterBuilder<T, KS> {
    const next = new FilterBuilder<T, KS>(this._data);
    next._conditions = this._conditions;
    next._selected = fields;
    return next;
  }

  public execute(): Pick<T, K>[] {
    let result = [...this._data];

    // apply filters
    for (const key in this._conditions) {
      result = result.filter(
        item => item[key as keyof T] === this._conditions[key as keyof T]
      );
    }

    // apply select
    if (this._selected) {
      return result.map(item => {
        const picked = {} as Pick<T, K>;
        this._selected!.forEach(k => {
          picked[k as K] = item[k as keyof T] as any;
        });
        return picked;
      });
    }

    return result as unknown as Pick<T, K>[];
  }
}

const products: Product[] = [
  { id: 1, name: "A", price: 10, inStock: true },
  { id: 2, name: "B", price: 20, inStock: false },
];

const result = new FilterBuilder<Product>(products)
  .select('id', 'name')
  .where('inStock', true)
  .execute();

console.log(result);

// result: { id: number; name: string }[]