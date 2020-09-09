const fileForm = document.getElementById('form');
const selectFile = fileForm.querySelector('input');
const progressBar = document.getElementById('progress');

fileForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const formData = new FormData(fileForm);
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php'); 
  
  xhr.upload.addEventListener('progress', e => progressBar.value = (e.loaded / e.total).toFixed(2));
  
  xhr.send(formData);
});

selectFile.addEventListener('change', () => progressBar.value = '0');
