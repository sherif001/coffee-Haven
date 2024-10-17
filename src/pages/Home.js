import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to Coffee Haven</h1>
      <p>Discover the finest coffee products curated just for you.</p>
      <Link to="/products">
        <button className="btn btn-primary mt-3">Explore Products</button>
      </Link>
    </div>
  );
}

export default Home;
