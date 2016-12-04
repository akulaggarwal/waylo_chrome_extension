window.onload = () => {
  console.log('FINISHED LOADING');

  const form = document.getElementsByTagName('form');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    console.log(searchButton);
  })
}
