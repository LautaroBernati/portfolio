type Rule<T> =
  | { kind: 'required' }
  | { kind: 'minLength'; value: number }
  | { kind: 'maxLength'; value: number }
  | { kind: 'min'; value: number }
  | { kind: 'max'; value: number }
  | { kind: 'pattern'; regex: RegExp }
  | { kind: 'custom'; fn: (v: T) => boolean; message: string };

type FieldSchema<T> = Rule<T> | Rule<T>[];
type Schema<T> = {
  [K in keyof T]: FieldSchema<T[K]>;
};

type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: Partial<Record<keyof T, string>> };
declare function createValidator<T extends Record<string, unknown>>(
  schema: Schema<T>,
): (input: T) => ValidationResult<T>;

(function () {
  /**
   * Build a createValidator function that takes a schema — an object where
   * each key maps to one or more validation rules — and returns a validate function.
   * The validate function must be fully typed: its input type is inferred from the schema, and its return type is a discriminated union.
   */

  const validate = createValidator<{
    name: string;
    age: number;
    email: string;
  }>({
    name: [{ kind: 'required' }, { kind: 'minLength', value: 2 }],
    age: [
      { kind: 'min', value: 0 },
      { kind: 'max', value: 120 },
    ],
    email: { kind: 'pattern', regex: /^[^@]+@[^@]+\.[^@]+$/ },
  });

  const res = validate({ name: 'La', age: 28, email: 'la@test.com' });

  if (res.ok) {
    console.log(res.data.name);
  } else {
    console.log(res.errors);
  }
})();
