const oneLinerJoke = require('one-liner-joke')

const getJokes = () => {
    const randomJoke = oneLinerJoke.getRandomJoke();
    return randomJoke;
}

module.exports = {getJokes}