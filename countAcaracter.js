module.exports = countAcaracter;

function countAcaracter(eminem, letter) {
    var count = 0;
  
    for (var i = 0; i < eminem.length; i++) {
      if (eminem[i] === letter) {
        count++;
      }
    }
  
    return count;
  }
  
  var sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";


  var letter = "a";
  var count = countAcaracter(sentence, letter);
  console.log("Le nombre d'occurrences de '" + letter +" ' est : " + count);