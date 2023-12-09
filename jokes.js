document.addEventListener('DOMContentLoaded', function() {
    const setup = document.getElementById('setup');
    const punchline = document.getElementById('punchline');
    const generateBtn = document.getElementById('generate-btn');
  
    generateBtn.addEventListener('click', function() {
      fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
          setup.textContent = data.setup;
          punchline.textContent = data.punchline;
        })
        .catch(error => console.log(error));
    });
  });
  