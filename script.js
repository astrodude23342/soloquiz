function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["passwort"].value;
  
      if ((x=="QuizUser23342") && (y=="220208")) {
        alert("Du wirst zur Website weitergeleitet...");
        return true;
      }
      else {
        alert("Falscher Username oder falsches Passwort!");
        return false;
      }
    }

    function result() {

      var score=0;
      if (document.getElementbyID('correct1'.checked)) {
        score++;
      }
      if (document.getElementbyID('correct2'.checked)) {
        score++;
      }
      if (document.getElementbyID('correct3'.checked)) {
        score++;
      }
      alert("Deine erreichte Punktzahl lautet:"+score);
    }
