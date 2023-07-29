// Callback hell, also known as the Pyramid of Doom, is a situation that arises in asynchronous JavaScript code when
// multiple nested callbacks are used. This happens when there are many asynchronous operations that depend on the
// results of each other, leading to deeply nested callback functions. The resulting code becomes hard to read,
// understand, and maintain.

// Here's an example of callback hell:

asyncOperation1((result1) => {
  asyncOperation2(result1, (result2) => {
    asyncOperation3(result2, (result3) => {
      // More nested callbacks...
    });
  });
});

// To solve callback hell, there are several approaches:

// Using Named Functions:
// Refactor the callbacks into separate named functions, which improves readability and maintains a more linear flow
// of the code.

function onResult1(result1) {
  asyncOperation2(result1, onResult2);
}

function onResult2(result2) {
  asyncOperation3(result2, onResult3);
}

asyncOperation1(onResult1);

// Using Promises:
// Promises are a cleaner way to handle asynchronous operations and avoid callback hell. They allow chaining multiple
// asynchronous calls in a more readable manner.

asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => {
    // Work with the final result
  })
  .catch((error) => {
    // Handle errors
  });

//   Using async/await:
// async/await is a syntactic sugar built on top of promises that allows writing asynchronous code in a synchronous
// style, making it even more readable and easier to reason about.
async function doAsyncOperations() {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2(result1);
    const result3 = await asyncOperation3(result2);
    // Work with the final result
  } catch (error) {
    // Handle errors
  }
}

doAsyncOperations();
