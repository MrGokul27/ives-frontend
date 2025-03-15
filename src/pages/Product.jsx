import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    return (
        <div className="container">
            <h2>Product Details</h2>
            <p>Product ID: {id}</p>
        </div>
    );
};

export default Product;
