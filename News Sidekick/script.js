const apiKey = '';  // Your API key

function fetchNews(query, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = '<div class="loading">Loading...</div>';

  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${encodeURIComponent(query)}&language=en`;

  fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.results, containerId))
    .catch(err => {
      console.error(`Error loading ${containerId}:`, err);
      container.innerHTML = '<div class="error">Failed to load news. Try again later.</div>';
    });
}

fetchNews('technology', 'technologyNews');
fetchNews('artificial intelligence OR AI', 'aiNews');
fetchNews('crypto', 'cryptoNews');
fetchNews('web3', 'web3News');
fetchNews('textile engineering', 'textileNews');
fetchNews('entertainment', 'funNews');

function displayNews(articles, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  articles.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <img src="${article.image_url || 'https://via.placeholder.com/300x180'}" alt="News image">
      <h3>${article.title}</h3>
      <p>${article.description || 'No description available.'}</p>
      <a href="${article.link}" target="_blank">Read more</a>
    `;
    container.appendChild(card);
  });
}