const axios = require('axios');

export async function getFact() {
    console.log("runs")
    return "string"
    try{
        const response = await axios.get('https://catfact.ninja/fact');
        console.log('response  ', response)
        return "s";
    }catch(error) {
        return [];
    }
    x
}

