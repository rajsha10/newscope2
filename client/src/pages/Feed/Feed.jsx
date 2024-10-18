import { useEffect} from 'react';
import styles from "./Feed.module.css"
import { Article, Hero } from '../../components';
import { fetchNews } from '../../features/newsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Feed = () => {
     const dispatch = useDispatch();
     const { articles, loading, error } = useSelector((state) => state.news);

     useEffect(() => {
          dispatch(fetchNews());
     }, [dispatch]);

     const topArticles = articles.slice(0, 5);

     return (
          <div className={styles.feed}>
               {error && <p className={styles.error}>{error}</p>}

               {topArticles.length > 0 && <Hero articles={topArticles} />}

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
