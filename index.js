
  const music = [
    {name: 'forever' , Audio: 'songs/BLACK EMPEARE 138.mp3', img: 'pics/forever.jpg'},
    {name: 'Only You' , Audio: 'songs/ATER FIER ONLY YOU@@@@@.mp3', img: 'pics/only you.jpg'},
    {name: 'BE' , Audio: 'songs/BLACK EMPEARE 138.mp3', img: 'pics/blacks.jpg'},
    {name: 'Enemies' , Audio: 'songs/Blacks Empire ( WDB )__Enemmies around we__prod by kman armstrong - Copy - Copy (1).mp3', img: 'pics/enemies-back-bad man.jpg'},
    {name: 'Lusaka City' , Audio: 'songs/Blacks Empire __ lusaka city_prod by kman armstrong (1).mp3', img: 'pics/lusaka city-siyani.jpg'},
    {name: 'Siyani' , Audio: 'songs/Blacks Empire __Chanba siyani__prod by kman armstrong (1).mp3', img: 'pics/lusaka city-siyani.jpg'},
    {name: 'back' , Audio: "songs/Blacks Empire__ back it-f'me__prod by kman armstrong final - Copy - Copy (1).mp3", img: 'pics/enemies-back-bad man.jpg'},
    {name: 'Bad Man' , Audio: 'songs/Blacks Empire__Bad Man__ prod by kman armstrong (1).mp3', img: 'pics/enemies-back-bad man.jpg'}
  
  ]
  
  const musicDiv = document.querySelector('#divBox');
  
  music.forEach(
    (item)=> { 
      // this creates a div with img and a attributes as children.  <div> <img> <a> </div>
      const imageHolder = document.createElement('img');
      imageHolder.setAttribute('src' , item.img);
      imageHolder.style = 'width: 50px';
  
      const aElement = document.createElement('a');
      aElement.innerHTML = `download ${item.name}`;
      aElement.setAttribute('href', item.Audio);
      aElement.setAttribute('download' , item.Audio);
  
      const infoHolder = document.createElement('div');
      infoHolder.setAttribute('id' , 'infoHolder')
      infoHolder.append(imageHolder);
      infoHolder.append(aElement);
      musicDiv.appendChild(infoHolder);
    }
  )

