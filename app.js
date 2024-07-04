const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')


const addNewJoke = async () => {
const joketext = await getDadjoke();
const newLi = document.createElement('li')
newLi.append(joketext)
jokes.append(newLi)
}


const getDadjoke = async ()=> {
    try {
         const config = { headers: {Accept: 'application/json'}}
         const res = await axios.get('https://icanhazdadjoke.com/', config)
         return res.data.joke;
    } catch (e) {
        return "no jokes sorryy!!! :("
    } 
}


button.addEventListener('click' , addNewJoke)