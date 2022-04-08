const renderCards = (err, data) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  const template = document.createDocumentFragment();
  const headlines = data.articles.map(item => {
    const card = document.createElement('div');

    if (item.author === null) item.author = 'Автор не указан';

    const title = document.createElement('a');
    title.className = 'card__title';
    title.href = item.url;
    title.target = '_blank';
    title.textContent = item.title;
    const text = document.createElement('p');
    text.className = 'card__text';
    text.textContent = item.description;
    const image = new Image();
    image.className = 'card__image';
    image.src = item.urlToImage;
    card.className = 'card';
    const cardDate = document.createElement('p');
    cardDate.className = 'card__date';
    cardDate.textContent = item.publishedAt;
    const cardAuthor = document.createElement('p');
    cardAuthor.className = 'card__author';
    cardAuthor.textContent = item.author;


    card.append(title, text, image, cardDate, cardAuthor);

    return card;
  });


  headlines.splice(4);
  template.append(...headlines);

  return template;
};

export default renderCards;
