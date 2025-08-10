import { greetFromA } from './moduleA.js';
import { getCounter, incrementCounter, MAX_CALLS } from './shared.js';

export function greetFromB() {
  if (getCounter() >= MAX_CALLS) return;

  console.log(`Hello from B! (${getCounter() + 1})`);
  incrementCounter();
  greetFromA();
}
