const book = document.getElementById('book');
const fontSizes = document.getElementsByClassName('font-size');

for (const size of fontSizes) 
  size.addEventListener('click', function() {
    event.preventDefault();
    const oldSize = this.parentElement.querySelector('.font-size_active');
    if (this === oldSize) 
      return;
    oldSize.classList.remove('font-size_active');
    this.classList.add('font-size_active');
    
    book.classList.remove('book_fs-'+oldSize.dataset.size);
    book.classList.add('book_fs-'+this.dataset.size);
  })