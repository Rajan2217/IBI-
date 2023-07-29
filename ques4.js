// Promise chaining is a technique in JavaScript used to perform a series of asynchronous operations in a sequence.
// It allows you to chain multiple promises together, ensuring that the next operation starts only after the previous
// one has completed successfully. This makes asynchronous code more readable and avoids the "callback hell" problem.

// Here's an example of promise chaining:

// Example asynchronous functions that return promises
function fetchUserData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const userData = { id: 1, name: "John" };
      resolve(userData);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    // Simulating another asynchronous operation
    setTimeout(() => {
      const userPosts = [
        { id: 101, title: "Post 1" },
        { id: 102, title: "Post 2" },
      ];
      resolve(userPosts);
    }, 1500);
  });
}

// Chaining promises
fetchUserData()
  .then((user) => {
    console.log("User data:", user);
    return fetchUserPosts(user.id); // Returning a new promise to chain
  })
  .then((posts) => {
    console.log("User posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// In this example, fetchUserData and fetchUserPosts are asynchronous functions that return promises.
// We use promise chaining to fetch user data first and then fetch the user's posts after obtaining the user ID from
// the first promise's resolution. The .then() method is used to chain the next operation, and the final .catch() is
// used to handle any errors that might occur during the process.

// This way, the second operation (fetchUserPosts) will only execute after the first operation (fetchUserData) has
// successfully completed. The result will be more organized and easier to read compared to using nested callbacks.
