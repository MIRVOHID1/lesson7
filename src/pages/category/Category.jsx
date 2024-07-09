import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/categorySlice';

const Category = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className='container'>
            <div>
                <h1>Categories</h1>
                <div>
                    {categories.map((category) => (
                        <p key={category.id}>{category.name}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
