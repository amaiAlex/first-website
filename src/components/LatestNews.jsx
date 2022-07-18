import news from './news';

function LatestNews() {
  return (
    <div>
      <h1>Latest-News</h1>
      <h2>{news[0].title}</h2>
      <p>{news[0].text.split(' ').slice(0, 30).join(' ')}</p>
      <img src={news[0].image} alt="doctors" />
      <a href={news[0].url}>Continue reading</a>
    </div>
  );
}

export default LatestNews;
