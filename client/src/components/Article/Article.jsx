import styles from './Article.module.css';

const Article = ({ article }) => {
  // Function to format date and time
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div className={styles.article}>
  <h2>{article.title}</h2>
  <img src={article.thumbnail} alt={article.title} className={styles.articleThumbnail} />
  <p>{article.description}</p>
  <div className={styles.articleAuthor}>
    <img src={article.author.avatar} alt={article.author.name} className={styles.authorAvatar} />
    <p>{article.author.name}</p>
  </div>
  <p className={styles.articleDate}>{formatDate(article.createdAt)}</p>
</div>
  );
};

export default Article;
