module.exports = average;

function average() {
  var notes = [20, 12, 8, 9];
    var sum = 0;
    var moy=1;
    for (var i = 0; i < notes.length; i++) {
      sum += notes[i];
    }
  moy=sum / notes.length;
    return moy;
    
  }
  console.log(average());
