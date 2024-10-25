import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../features/categorySlice';
import styles from './CategoryBar.module.css'

const CategoryBar = () => {
    const categories = useSelector(selectCategories);

    return (
        <div className={styles.categoryBar}>
            <ul className={styles.categoryList}>
                {categories.map((catName, id) => (
                    <li key={id} className={styles.categoryItem}>
                        <a href={`#${catName.toLowerCase()}`} className={styles.categoryLink}>
                            {catName}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryBar;
