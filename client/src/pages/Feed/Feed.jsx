import { useEffect, useState } from 'react';
import styles from "./Feed.module.css";
import { Article, Hero, NewsTiles } from '../../components';
import { fetchNews } from '../../features/newsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Feed = () => {
     const dispatch = useDispatch();
     const { articles, loading, error } = useSelector((state) => state.news);

     // State to manage pagination
     const [currentPage, setCurrentPage] = useState(1);
     const articlesPerPage = 5;

     useEffect(() => {
          dispatch(fetchNews());
     }, [dispatch]);

     const topArticles = articles.slice(0, 5);
     const topRead = articles.slice(0, 10);

     // Calculate current articles for the page
     const indexOfLastArticle = currentPage * articlesPerPage;
     const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
     const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

     // Pagination functions
     const nextPage = () => {
          if (indexOfLastArticle < articles.length) setCurrentPage(currentPage + 1);
     };

     const prevPage = () => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
     };

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

               {/* Display 10 Articles at a Time */}
               {currentArticles.length > 0 ? (
                    currentArticles.map(item => (
                         <Article key={item._id} article={item} className={styles.article} />
                    ))
               ) : (
                    <p>No news available.</p>
               )}

               {/* Pagination Controls */}
               <div className={styles.pagination}>
                    <button onClick={prevPage} disabled={currentPage === 1}>
                         Previous
                    </button>
                    <span>Page {currentPage}</span>
                    <button onClick={nextPage} disabled={indexOfLastArticle >= articles.length}>
                         Next
                    </button>
               </div>
          </div>
     );
};

export default Feed;
