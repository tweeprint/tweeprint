import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    
    return (
        <div className="p-2 my-1">
            <Link className="px-2 py-2 hover:text-indigo-600 rounded text-xs" to={`/categories/${category.slug}`}>{`${category.category}`}</Link>
        </div>
    );
};

export default Category;