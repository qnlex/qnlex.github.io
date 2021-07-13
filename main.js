
pianoMade = false;

function makePiano() {
  pianoMade = true;
  keysAmount = Math.round(parseInt(document.getElementById('keyNum').value));
  if (keysAmount < 5 || keysAmount > 20)
    {
        alert("There must be between 5 and 20 keys");
        pianoMade = false;
        return false;
    }
  $("div#status").html("Your piano has been made");
}
