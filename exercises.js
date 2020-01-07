// Undo Changes

function undo() {
  var undoChange = document.getElementById('undo');
  undoChange = window.location.reload();
}

//Changing the text in HTML

function changeText() {
  var txtChange = document.getElementById('textchange');
  txtChange.innerHTML = 'This is the changed text.';
}

// Hiding an elementin HTML

function disappearElement() {
  var disElement = document.getElementById('disappear');
  disElement.style.display = 'none';
}
