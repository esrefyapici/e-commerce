import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../reduxtk/Slices/cartSlice";

function CardSideBar({ isOpen, onClose }) {
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center my-10 ml-5">
          <h2 className="text-lg font-bold">Sepet</h2>
          <button onClick={onClose} className="text-lg font-bold">
            X
          </button>
        </div>
        <hr />
        <div className="p-4 pb-20 overflow-y-auto h-[calc(100%-80px)] space-y-4">
          {carts &&
            carts.map((cart) => (
              <div
                key={cart.id}
                className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <img
                  src={cart.image}
                  alt={cart.title}
                  className="w-24 h-24 object-contain rounded bg-white p-2"
                />
                <div className="flex-1">
                  <h1 className="text-base font-semibold line-clamp-2">
                    {cart.title}
                  </h1>
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-700">
                    <p className="text-emerald-600 font-bold">
                      ${cart.price * cart.quantity}
                    </p>
                    <div className="flex gap-3 justify-center items-center">
                      <button
                        className="cursor-pointer"
                        onClick={() => dispatch(decreaseQuantity(cart.id))}
                      >
                        -
                      </button>
                      <p className="text-gray-500">{cart.quantity}</p>
                      <button
                        className="cursor-pointer"
                        onClick={() => dispatch(increaseQuantity(cart.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="p-4 border-t flex justify-between items-center font-semibold text-lg">
            <span>Toplam:</span>
            <span className="text-emerald-700">$ {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSideBar;
