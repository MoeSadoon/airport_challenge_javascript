function Plane() {
  this.isFlying = true;
};


// Plane.prototype.land = function(){
//   this.isFlying = false;
// };


Plane.prototype.landAirport = function(airport){
  this.isFlying = false;
  this.currentAirport = airport;
  airport.accommodatePlane(this);
};

Plane.prototype.takeOff = function(){
  this.isFlying = true;
  this.currentAirport = null;
};

// Plane.prototype.makeItFly = function(){
//   this.isFlying = true;
// };



// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
