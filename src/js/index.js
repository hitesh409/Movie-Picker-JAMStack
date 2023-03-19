const genres = ['action','adventure','comedy'];

let randomNum = Math.floor(Math.random()*genres.length);
let randomIdx = Math.floor(Math.random()*20);

const genre = genres[randomNum];
document.getElementById(genre + randomIdx).className = "show";
