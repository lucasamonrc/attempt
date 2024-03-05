# Attempt.js

The Promise API in JavaScript is among the most important additions to the language, it made asynchronous calls much more manageable and provided a great solution to callback hells. This solution is not at its finest though, it is still possible to create a pyramid of doom by chaining `.then` and `.catch` calls at the end of promises. So enter the `async/await`, we finally said goodbye to long chains of `.then` and `.catch` but only to encounter the `try-catch` tower of doom! The `attempt` promise wrapper attempts (pun intended) to solve this problem by wrapping your async/promise calls with a function that returns two values: whatever it is that your promise returns, and an error (if the promise fails). This eliminates the tower of doom problem and leaves the error handling entirely up to you without forcing you to wrap everything around try-catches.

## Install
```sh
npm install attemptjs
```

## API
Simply import that attempt function from the package and start wrapping promises.

```js
import attempt from 'attempt'

async function main() {
  const [result, error] = await attempt(mypromise)

  if (error) {
    // do your error handling here
    // result will be undefined if error is set
  }

  ...
}
```

If you need to pass arguments to your promise

```js
const [result, error] = attempt(() => mypromise(args))
```

