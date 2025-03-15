import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <Card title={product.name} bordered={true}>
            <p>Price: ${product.price}</p>
            <Button type="primary" onClick={() => dispatch(addToCart(product))}>
                Add to Cart
            </Button>
            <Button type="default" onClick={() => dispatch(addToWishlist(product))} style={{ marginLeft: '10px' }}>
                ❤️ Add to Wishlist
            </Button>
        </Card>
    );
};

export default ProductCard;
