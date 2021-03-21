import Category from './Category';

const Categories = ({categories}) => {
    return (
        <div className="text-gray-500 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {categories.map(category => <Category key={category.category} category={category}/>)}
        </div>
    )     
};

export default Categories;