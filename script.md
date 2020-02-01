Welcome back! I hope you had fun with that exercise.

Let's solve this exercise!

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

Looking at the terminal, it appears that
between the Winter White hamster, the Russian Blue cat, and a Corgi, the best pet is a Winter White hamster.

Let's try a German Shepherd dog.
Still winter white.
Now let's try a Maltese as the dog.

Oh if you look at the output of the terminal, it looks like the dog isn't found,
we've been seeing this warning whenever a dog cat or hamster isn't in the predefined list.
In the next video, our promises will start rejecting if we pass a breed in that doesn't exist.
I'll see you in the next video where we'll learn all about promise rejections!
