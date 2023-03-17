const axios = require('axios');
module.exports = async function() //whatever this results in will be exported
{
    try{
        const response = await axios.get('https://api.imgflip.com/get_memes');
        return response.data.data;
    }
    catch(error)
    {
        console.log(error);
    }
}

// {
//     "memes": [
//         {"url": "https://i.imgflip.com/30b1gx.jpg"},
//         {"url": "https://i.imgflip.com/1g8my4.jpg"},
//         {"url": "https://i.imgflip.com/1ur9b0.jpg"},
//         {"url": "https://i.imgflip.com/261o3j.jpg"}
//     ]
// }