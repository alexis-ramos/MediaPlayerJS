function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
  //   player.mute();
  //   player.play();
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};

export default AutoPlay;
