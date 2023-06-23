var toggleButton = document.getElementById('toggleButton');
var searchDiv = document.querySelector('.search');

toggleButton.addEventListener('click', function() {
  if (searchDiv.classList.contains('hidden')) {
    searchDiv.classList.remove('hidden');
  } else {
    searchDiv.classList.add('hidden');
  }
});

var toggleButton = document.getElementById('toggleButton');
        var searchDiv = document.querySelector('.search');
        
        toggleButton.addEventListener('click', function() {
          searchDiv.classList.toggle('visible');
        });