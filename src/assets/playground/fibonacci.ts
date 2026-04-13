function fibonacci(n: number): number[] {
  const result: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

const seq = fibonacci(10);
console.log('Fibonacci sequence:', seq.join(', '));
console.log('Sum:', seq.reduce((a, b) => a + b, 0));
