class RateLimiter {
  private users = new Map<string, number[]>();

  constructor(
    private readonly limit: number,
    private readonly windowMs: number
  ) {}

  allow(userId: string): boolean {
    const now = Date.now();

    if (!this.users.has(userId)) {
      this.users.set(userId, []);
    }

    const timestamps = this.users.get(userId)!;

    // remove outdated timestamps
    while (timestamps.length && now - timestamps[0] > this.windowMs) {
      timestamps.shift();
    }

    if (timestamps.length >= this.limit) {
      return false;
    }

    timestamps.push(now);
    return true;
  }
}
const limiter = new RateLimiter(2, 2000);

console.log(limiter.allow("user1")); // true
console.log(limiter.allow("user1")); // true
console.log(limiter.allow("user1")); // false (limit reached)
console.log(limiter.allow("user1")); // false (limit reached)

setTimeout(() => {
  console.log(limiter.allow("user1")); // true (window reset)
  console.log(limiter.allow("user1")); // true
  console.log(limiter.allow("user1")); // false
    setTimeout(() => {
      console.log(limiter.allow("user1")); // true
      console.log(limiter.allow("user1")); // true
      console.log(limiter.allow("user1")); // false

    }, 2000);
}, 2100);
