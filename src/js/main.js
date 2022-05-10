var photos = [
    {
        url: 'https://i.imgur.com/CxgoZ8W.jpg',
        date: '07/05/2022'
    },
    {
        url: 'https://i.imgur.com/JwGRjFa.png',
        date: '26/04/2022',
        author: 'Cami',
        type: 'draw'
    },
    {
        url: 'https://i.imgur.com/vB2QCDB.jpg',
        date: '30/04/2022'
    },
    {
        url: 'https://i.imgur.com/X8iAOv5.jpg',
        date: '30/04/2022'
    },
    {
        url: 'https://i.imgur.com/W4CTcYx.jpg',
        date: '24/03/2022'
    },
    {
        url: 'https://i.imgur.com/rupXp2b.png',
        date: '24/05/2022'
    },
    {
        url: 'https://i.imgur.com/6aIxNvA.jpg',
        date: '26/03/2022'
    }
];

// get a random photo
const photo = photos[Math.floor(Math.random()*photos.length)]

// set the background image
document.getElementById('background').style.backgroundImage = `url(${photo.url})`;

// puts the info in the DOM
if(photo.type === 'draw'){
    document.getElementById('note').innerHTML = `<img class="icon" src="img/pencil.svg"> Dibujado el ${photo.date}`;
    document.getElementById('author').innerHTML = `por ${photo.author}`;
}else{
    document.getElementById('note').innerHTML = `<img class="icon" src="img/camera.svg"> Foto tomada el ${photo.date}`;
    
}