import news from './news';

function LatestNews() {
  return (
    <div>
      <h1>Latest-News</h1>
      <div className="columns-news">
        <img src={news[0].image} alt="doctors" />
        <div className="column">
          <h2>{news[0].title}</h2>
          <p>{news[0].text.split(' ').slice(0, 100).join(' ')}</p>
          <a className="link-button" href={news[0].url}>
            <h4>Continue reading</h4>
            <span className="arrow"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
