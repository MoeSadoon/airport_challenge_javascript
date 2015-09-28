function Airport() {
  this.planes = [];
};


  Airport.prototype.accommodatePlane = function(plane){
      this.planes.push(plane);
  };
