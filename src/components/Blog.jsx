import news from "./news";
function Blog() {
    return (
      <div>
    <h2>{news[0].title}</h2>
    <p>{news[0].text}</p>
    <img src={news[0].image} alt="doctors" />
      </div>
    );
  }
  
  export default Blog;