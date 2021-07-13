
pianoMade = false;

function makePiano() {
  pianoMade = true;
  keysAmount = Math.round(parseInt(document.getElementById('keyNum').value));
  if (keysAmount < 5)
    {
        alert("There must be at least 5 keys");
        pianoMade = false;
        return false;
    }
}
