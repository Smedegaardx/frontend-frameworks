const productinfo = ({ product }) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h2 className="font-hero text-4xl mt-2">{product.title}</h2>
        <p className="font-text text-xl mt-3">{product.description}</p>
      </div>
      <div>
        <h2 className="font-text text-2xl"> Price: {product.price} $USD</h2>
      </div>
    </div>
  );
};

export default productinfo;
