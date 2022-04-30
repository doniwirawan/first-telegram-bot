const axios = require('axios')

async function getRandomCatFacts(){
    try{
        const response = await axios.get('https://catfact.ninja/facts?page=1')
        return await response.data.data[0].fact
    }catch(err){
        console.log(err)
    }
}
// getRandomCatFacts()
module.exports = { getRandomCatFacts }
