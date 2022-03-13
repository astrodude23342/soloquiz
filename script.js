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

