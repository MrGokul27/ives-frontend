import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h2>Your Wishlist</h2>
            {wishlistItems.length === 0 ? <p>Your wishlist is empty.</p> : (
                <ul>
                    {wishlistItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
