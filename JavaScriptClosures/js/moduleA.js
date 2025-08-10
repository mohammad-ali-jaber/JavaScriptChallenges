import { greetFromB } from './moduleB.js';
import { getCounter, incrementCounter, MAX_CALLS } from './shared.js';

export function greetFromA() {
  if (getCounter() >= MAX_CALLS) return;

  console.log(`Hello from A! (${getCounter() + 1})`);
  incrementCounter();
  greetFromB();
}
