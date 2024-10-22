import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NewsTiles.module.css'

const NewsTiles = () => {
    // Accessing state from Redux
    const { articles, loading, error } = useSelector((state) => state.news);

    // Assuming that 'topRead' is the top 10 articles sorted by popularity
    const topRead = articles.slice(0, 10); 

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={styles.newsTilesContainer}>
            {/* News Tiles Section */}
            <div className={styles.newsTiles}>
                {articles.map((article) => (
                    <div key={article._id} className={styles.newsTile}>
                        <Link to={`/article/${article._id}`} style={{ textDecoration: 'none' }}>
                            <img src={article.thumbnail} alt={article.title} className={styles.tileThumbnail} />
                            <h3 className={styles.tileTitle}>{article.title}</h3>
                            <p className={styles.tileDescription}>{article.description.substring(0, 100)}...</p>
                            <div className={styles.tileAuthorDate}>
                                <p className={styles.tileAuthor}>{article.author.name}</p>
                                <p className={styles.tileDate}>{formatDate(article.createdAt)}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Top Read News Section */}
            <div className={styles.topRead}>
                <h3>Top Read</h3>
                <ul>
                    {topRead.map((article) => (
                        <li key={article._id} className={styles.topReadItem}>
                            <img src={article.thumbnail} alt={article.title} className={styles.topReadThumbnail} />
                            <p className={styles.topReadDescription}>
                                {article.description.substring(0, 100)}...
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Helper function to format date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export default NewsTiles;
