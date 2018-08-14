$(function () {

  function stringToArray (stringToSplit) {
    return stringToSplit.split("");
  }

  $("#form1").submit(function(evt) {
    evt.preventDefault();
    var userInput = $("#user-input").val();
    var newArray = stringToArray(userInput);


    newArray.forEach(function(letter, index) {
      console.log(letter);
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      // vowels.forEach(function(vowel) {
      //   if ( letter == vowel ) {
      //     letter = "-";
      //   }
      // });
      for (var i = 0; i < vowels.length; i++) {
        if ( letter == vowels[i] ) {
          console.log("vowel found");
          newArray[index] = "-";
          console.log(letter);
          console.log(newArray);
        }
      };

    });
    $("#output").text(newArray.join(""));
  });



});
