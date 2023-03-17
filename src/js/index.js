const course  = ['cpp','java','python','jamstack'];
let randomNum = Math.floor(Math.random()*course.length);
document.querySelector('.course').append(course[randomNum]);
// fetch('https://api.imgflip.com/get_memes')
//     .then (response => response.json())
//     .then (data =>{
//         console.log(data.data.memes)
//         for (var i=0;i<data.data.memes.length; i++) {
//             var img = document.createElement('img');
//             document.createElement("img");
//             img.src = data.data.memes [i].url;
//             document.getElementById('img-container').appendChild(img);
//         }
// })