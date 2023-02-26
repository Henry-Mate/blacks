let musics = [
  { name: 'forever', Audio: 'songs/BLACK EMPEARE 138.mp3'  , by: 'Ater Fire' },
  { name: 'Only You', Audio: 'songs/ATER FIER ONLY YOU@@@@@.mp3'  , by: 'Ater Fire' },
  { name: 'BE', Audio: 'songs/BLACK EMPEARE 138.mp3'  , by: 'blacks empire' },
  { name: 'Enemies', Audio: 'songs/Blacks Empire ( WDB )__Enemmies around we__prod by kman armstrong - Copy - Copy (1).mp3'   , by: 'blacks empire' },
  { name: 'Lusaka City', Audio: 'songs/Blacks Empire __ lusaka city_prod by kman armstrong (1).mp3'   , by: 'blacks empire' },
  { name: 'Siyani', Audio: 'songs/Blacks Empire __Chanba siyani__prod by kman armstrong (1).mp3'   , by: 'blacks empire' },
  { name: 'back', Audio: "songs/Blacks Empire__ back it-f'me__prod by kman armstrong final - Copy - Copy (1).mp3"   , by: 'blacks empire' },
  { name: 'Bad Man', Audio: 'songs/Blacks Empire__Bad Man__ prod by kman armstrong (1).mp3'   , by: 'blacks empire' }

]

const musicDivs = document.querySelector('#divBox');
const input = document.querySelector('#input');
const searchHolder = document.querySelector('#searchHolder');
const searchFunction = () => {
  musicDivs.innerHTML = '';
  search = input.value;
   const m= musics.filter((item) => ((item.name).toLowerCase()).includes(search.toLowerCase()));
  if(m.length ==0) {
    const noInfo = document.createElement('p');
    noInfo.innerHTML = 'music not found try putting few characters or go to menu and contact the admin to upload the music that you want';
    musicDivs.append(noInfo)
  }

  m.map(
    (item) => {
      // this creates a div with an a attributes as children.  <div> <a> </div>

      const aElement = document.createElement('a');
      aElement.innerHTML = `download ${item.name} by ${item.by}`;
      aElement.setAttribute('href', item.Audio);
      aElement.setAttribute('download', item.Audio);
  
      const infoHolder = document.createElement('div');
      infoHolder.setAttribute('id', 'infoHolder');
      infoHolder.append(aElement);
      musicDivs.appendChild(infoHolder);
    }
  )
}


const searchButton = document.querySelector('#searchButton');
searchButton.onclick = searchFunction;





musics.forEach(
  (item) => {
    // this creates a div an a attributes as children.  <div>  <a> </div>


    const aElement = document.createElement('a');
    aElement.innerHTML = `download ${item.name} by ${item.by}`;
    aElement.setAttribute('href', item.Audio);
    aElement.setAttribute('download', item.Audio);

    const infoHolder = document.createElement('div');
    infoHolder.setAttribute('id', 'infoHolder')
    infoHolder.append(aElement);
    musicDivs.appendChild(infoHolder);
  }
)
