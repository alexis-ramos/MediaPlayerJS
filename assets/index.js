import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const button = document.querySelector("#playButton");
const buttonMute = document.querySelector("#mute");
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
