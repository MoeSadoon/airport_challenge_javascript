


 describe( "Plane", function() {

   var plane;
   var airport;

   beforeEach(function(){
     plane = new Plane();
     airport = new Airport();
   });

  it("should be flying when created", function(){
    expect(plane.isFlying).toEqual(true);
  });

  // it("it should not be flying after landing", function() {
  //   plane.land();
  //   expect(plane.isFlying).toEqual(false);
  // });

  it("it should land at an designated airport", function() {
   plane.landAirport(airport);
   expect(plane.currentAirport).toEqual(airport);
  });


  it("should not be flying after landing", function(){
     plane.landAirport(airport);
     expect(plane.isFlying).toEqual(false);
  });

  it("should be flying after take off", function(){
    plane.takeOff();
    expect(plane.isFlying).toEqual(true);
  });

  it("should not be in current airport after take off", function(){
    plane.takeOff();
    expect(plane.currentAirport).toEqual(null);
  });

 });


 describe("Airport", function(){

   it("has an empty plane array when created", function(){
     airport = new Airport();
     expect(airport.planes).toEqual([]);

   });



  it("can accommodate planes", function(){
      plane = new Plane();
      airport = new Airport();
      airport.accommodatePlane(plane);
      expect(airport.planes).toEqual([plane]);

    });

  it("accomodates a plane after plane lands", function(){
      plane = new Plane();
      airport = new Airport();
      plane.landAirport(airport);
      expect(airport.planes).toEqual([plane]);

  });






 });


// describe("Player", function() {
//   var player;
//   var song;
//
//
//
//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
