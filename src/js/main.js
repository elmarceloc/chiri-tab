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
        date: '24/05/2021'
    }
];

const photo = photos[Math.floor(Math.random()*photos.length)]

document.getElementById('background').style.backgroundImage = `url(${photo.url})`;

if(photo.type === 'draw'){
    document.getElementById('note').innerHTML = `Dibujado el ${photo.date}`;
    document.getElementById('author').innerHTML = `por ${photo.author}`;
}else{
    document.getElementById('note').innerHTML = `Foto tomada el ${photo.date}`;
    
}