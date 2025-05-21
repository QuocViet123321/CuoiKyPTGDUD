import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function DetailProduct() {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />

      <div className="flex flex-col items-center justify-center ">
        <button
          className="px-6 py-3 text-white font-medium bg-red-500 w-[150px] rounded-xl"
          onClick={() => navigate(-1)}
        >
          Trở về
        </button>
        <div
          key={product.id}
          className="bg-white shadow-xl p-3 rounded-md flex flex-col items-center w-[500px]"
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
            <button className="px-6 py-2 bg-green-500 rounded-xl w-[200px] text-white font-bold">
              Add to cart
            </button>
            <button className="px-6 py-2 bg-yellow-500 rounded-xl w-[200px] text-white font-bold">
              Edit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
