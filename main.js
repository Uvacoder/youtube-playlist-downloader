// AIzaSyA1Zv7gKh5pSX67ylmUygUx0vWUQeAXCjo
const ypi = require('youtube-playlist-info');
const fs = require('fs');
const ytdl = require('ytdl-core');
const prompt = require('prompt')

let youtubeUrls = []

prompt.get(['playlistnumber'], (err, res) => {

ypi("AIzaSyA1Zv7gKh5pSX67ylmUygUx0vWUQeAXCjo", "PLgCYzUzKIBE-vInwQhGSdnbyJ62nixHCt").then(items => {

  // console.log(items[0].resourceId)

  items.forEach( info => {
    youtubeUrls.push({
      title : info.title,
      url : "https://www.youtube.com/watch?v=" + info.resourceId.videoId
    })  
  });

     
  ytdl(youtubeUrls[res.playlistnumber-1].url)
  .pipe(fs.createWriteStream(youtubeUrls[res.playlistnumber-1].title));

}).catch(console.error);

})