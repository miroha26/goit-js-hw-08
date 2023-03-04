import throttle from 'lodash.throttle'
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function currentTime ({seconds}) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
};

player.on('timeupdate', throttle(currentTime, 1000));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
