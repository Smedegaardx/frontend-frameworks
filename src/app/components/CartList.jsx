import PaymentButton from "./PaymentButton";

const CartList = ({ cart, removeFromCart, addToCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="rounded-l-2xl sticky min-h-80.5 max-h-[90vh] top-10 p-4 bg-white shadow-md">
      <h2 className="font-hero text-lg mb-4">Din kurv</h2>
      {cart.length === 0 ? (
        <p className="font-text text-gray-400">Kurven er tom</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <span className="font-text">{item.title}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#F5A623] border border-[#F5A623] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#F5A623] hover:text-white"
                >
                  -
                </button>
                <span className="font-text">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="text-[#F5A623] border border-[#F5A623] rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#F5A623] hover:text-white"
                >
                  +
                </button>
                <span className="font-text w-16 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
          <hr className="my-2" />
          <p className="font-text font-bold">Total: ${total.toFixed(2)}</p>
        </>
      )}
      <PaymentButton cart={cart} />
    </div>
  );
};

export default CartList;
