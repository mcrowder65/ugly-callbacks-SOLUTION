Welcome back! I hope you had fun with that exercise.

Let's first implement the `getHamsters` function.

```js
function getHamsters(breed) {
  return utilities
    .getHamsters()
    .then(getNames)
    .then(getBreed(breed))
}
```

Great, now we have our getHamsters function.

Let's now use the getHamsters result in our mega callback!

```js
getDog("Corgi")
  .then(dog => {
    return getCat("Russian Blue").then(cat => {
      return getHamsters("Winter White").then(hamster => {
        return utilities.getBestPet(dog, cat, hamster)
      })
    })
  })
  .then(console.log)
```

Looks like the Winter White hamster is the best best among Corgis, Russian Blue cats, and Hamsters.

Let's try a German Shepherd dog.
Still winter white.
Now let's try a Maltese as the dog.

Oh if you look at the output of the terminal, it looks like the dog isn't found,
we've been seeing this warning whenever a dog cat or hamster isn't in the predefined list.
In the next video, we'll learn about what happens when promises reject!
