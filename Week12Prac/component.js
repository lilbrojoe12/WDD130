const searchBar = document.getElementById('searchBar');
const books = document.querySelectorAll('.book-item');

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();

  books.forEach(book => {
    const text = book.textContent.toLowerCase();
    if (text.includes(query)) {
      book.style.display = '';
    } else {
      book.style.display = 'none';
    }
  });
});
