import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/slideProduct";

function CartPage() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.product);

  const totalPrice = cartItems.reduce((a, b) => a + b.price, 0);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <div className="bg-gray-50">
        <div className="flex flex-col items-center ">
          {cartItems.length === 0 ? (
            <h1 className="bg-white w-full p-4 text-center text-[30px] font-bold shadow-xl rounded-md">
              Not items in cart
            </h1>
          ) : (
            <div>
              <h1 className="font-extrabold text-[40px] p-2 text-center">
                My Cart
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6">
                {cartItems.map((product) => (
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
                        onClick={() => dispatch(deleteFromCart(product.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white w-full shadow-md p-4 text-[18px] text-center font-medium">
                <h1>Số lượng sản phẩm là: {cartItems.length}</h1>
                <h1>
                  Tổng tiền: <span className="text-red-500">{totalPrice}</span>
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
