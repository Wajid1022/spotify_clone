console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from( document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals (feat. Laura Brehm" ,filePath: "1.mp3" , coverPath:"1.jpg" },
    {songName: "Cielo - Huma-Huma" , filePath: "2.mp3" ,coverPath:"2.jpg"  },
    {songName: "Deaf KEV" ,filePath: "3.mp3" ,coverPath:"3.jpg"},
    {songName: "Different Heaven & EH!DE" ,filePath: "4.mp3" ,coverPath:"4.jpg"},
    {songName: "Janji-Heroes-Tonight" ,filePath: "5.mp3" ,coverPath:"5.jpg"},
    {songName: "Let me Love you" ,filePath: "6.mp3" ,coverPath:"6.jpg"},
    {songName: "Salam-e-Ishq" ,filePath: "7.mp3" ,coverPath:"7.jpg"},
    {songName: "TakeOver" ,filePath: "8.mp3" ,coverPath:"8.jpg"},
    {songName: "OP By GURU" ,filePath: "9.mp3" ,coverPath:"9.jpg"},
    {songName: "BADSHAH" ,filePath: "10.mp3" ,coverPath:"10.jpg"},
]

songItems.forEach((element ,i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


//audioElement.play();
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }

    
})

//Listen to Events
audioElement.addEventListener('timeupdate', () =>{
    //  Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})
   myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
   })

   const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
   }

  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
console.log(e.target);
makeAllPlays();
songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-play');
e.target.classList.add('fa-pause');
audioElement.src = ` ${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName ;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-play');
masterPlay.classList.add('fa-pause');
    })
   })

   document.getElementById('next').addEventListener('click', () =>{
    if (songIndex>=9){
        songIndex=0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = ` ${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName ;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', () =>{
    if (songIndex<=0){
        songIndex=0
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = ` ${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName ;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})