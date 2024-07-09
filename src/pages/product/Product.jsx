import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    console.log(products);
    return (
        <div className='container'>
            <div>
                <h1>Products</h1>
                <div>
                    {products.map((product) => (
                        <p key={product._id}>{product.title}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
