import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../redux/slideProduct";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, cartItems } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <div className="flex flex-col items-center bg-gray-200">
        <h1 className="font-extrabold text-[40px] p-2">My product</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white  shadow-xl p-3 rounded-md flex flex-col justify-between items-center"
            >
              <img
                alt=""
                src={product.image}
                className="w-full h-[180px] object-cover rounded-md"
              />
              <h1 className="font-medium text-[18px]">{product.name}</h1>
              <h1 className="font-medium text-red-500 text-[18px]">
                {product.price}
              </h1>
              <p className="italic text-center">{product.description}</p>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="px-6 py-2 bg-red-500 rounded-xl w-[200px] text-white font-bold"
                  onClick={() =>
                    navigate(`/product/${product.id}`, { state: product })
                  }
                >
                  See
                </button>
                {cartItems.some((item) => item.id === product.id) ? (
                  <button className="px-6 py-2 bg-green-500 rounded-xl w-[200px] text-white font-bold">
                    Added
                  </button>
                ) : (
                  <button
                    className="px-6 py-2 bg-green-500 rounded-xl w-[200px] text-white font-bold"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to cart
                  </button>
                )}

                <button
                  className="px-6 py-2 bg-yellow-500 rounded-xl w-[200px] text-white font-bold"
                  onClick={() => navigate(`/edit/${product.id}`)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
