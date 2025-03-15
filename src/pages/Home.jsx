import ProductCard from '../components/ProductCard';

const Home = () => {
    const products = [
        { id: 1, name: 'T-Shirt', price: 20 },
        { id: 2, name: 'Jeans', price: 40 },
    ];

    return (
        <div className="container">
            <h1>Welcome to Ives's Clothing</h1>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
