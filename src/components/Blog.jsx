import news from './news';
function Blog() {
  return (
    <div>
      {news.map((newsEntry) => (
        <div>
          <h2>{newsEntry.title}</h2>
          <p>{newsEntry.text}</p>
          <img src={newsEntry.image} alt="doctors" />
        </div>
      ))}
    </div>
  );
}

export default Blog;
