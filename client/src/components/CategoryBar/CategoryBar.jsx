import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../features/categorySlice';
import { Link } from 'react-router-dom';
import styles from './CategoryBar.module.css';

const CategoryBar = () => {
    const categories = useSelector(selectCategories);

    return (
        <div className={styles.categoryBar}>
            <ul className={styles.categoryList}>
                {categories.map((catName, id) => (
                    <li key={id} className={styles.categoryItem}>
                        <Link to={`/category/${catName.toLowerCase()}`} className={styles.categoryLink}>
                            {catName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryBar;
