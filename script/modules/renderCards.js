
const renderCards = (err, data) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  // const template = document.createDocumentFragment();
  const headlines = data.articles.map(item => {
    const card = document.createElement('div');
    card.className = 'card';
    if (item.author === null) item.author = 'Автор не указан';
    card.innerHTML = `
      <a href="${item.url}" class="card__title"
        target="_blank">${item.title}</a>
      <p class="card__text">${item.description}</p>
      <img class="card__image" src="${item.urlToImage}">
      <p class="card__date">${item.publishedAt}</p>
      <p class="card__author">${item.author}</p>
    `;
    return card;
  });
  headlines.splice(4);
  return headlines;
};

export default renderCards;
