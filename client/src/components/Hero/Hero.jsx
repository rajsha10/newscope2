import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickNextArrow}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickPrevArrow}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
};

export default function Hero({ articles }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.topNews}>
      <Slider {...settings}>
        {articles.map((article) => (
          <div key={article._id} className={styles.sliderItem}>
            <Link to={`/${article.title}`} className={styles.link}>
              <div className={styles.imageContainer}>
                <img src={article.thumbnail} alt={article.title} className={styles.articleThumbnail} />
                <div className={styles.textOverlay}>
                  <h2 className={styles.articleTitle}>{article.title}</h2>
                  <p className={styles.articleDescription}>{article.description.substring(0, 500)}...</p>
                  <div className={styles.articleDetails}>
                    {article.author && <p className={styles.articleAuthor}>{article.author.name}</p>}
                    <p className={styles.articleDate}>{formatDate(article.createdAt)}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};