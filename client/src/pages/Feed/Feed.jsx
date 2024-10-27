import { useEffect} from 'react';
import styles from "./Feed.module.css"
import { Article, Hero, NewsTiles } from '../../components';
import { fetchNews } from '../../features/newsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Feed = () => {
     const dispatch = useDispatch();
     const { articles, loading, error } = useSelector((state) => state.news);
 
     useEffect(() => {
          dispatch(fetchNews());
     }, [dispatch]);

     const topArticles = articles.slice(0, 5);
     const topRead = articles.slice(0, 10);

     return (
          <div className={styles.feed}>
               {error && <p className={styles.error}>{error}</p>}

               {/* Hero Section  */}
               {topArticles.length > 0 && <Hero articles={topArticles} />}

               {/* News Tiles Section */}
               {articles.length > 0 ? (
                    <NewsTiles articles={articles} topRead={topRead} />
               ) : (
                    <p>No news available.</p>
               )}

               {articles.length > 0 ? (
                    articles.map(item => (
                         <Article key={item._id} article={item} className={styles.article} />
                    ))
               ) : (
                    <p>No news available.</p>
               )}
          </div>
     );
};

export default Feed;
