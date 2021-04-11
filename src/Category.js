import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    
    return (
        <div className="my-1">
            <Link className="px-4 py-1 hover:text-indigo-600 rounded text-xs" to={`/categories/${category.slug}`}>{`${category.category}`}</Link>
        </div>
    );
};

export default Category;