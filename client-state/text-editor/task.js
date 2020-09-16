const textEditor = document.getElementById('editor');
const clearButton = document.getElementById('clear');

textEditor.addEventListener('input', function() {
    localStorage.setItem('text', textEditor.value);
})

clearButton.addEventListener('click', function() {
    textEditor.value = '';
    localStorage.removeItem('text');
});

textEditor.value = localStorage.getItem('text');