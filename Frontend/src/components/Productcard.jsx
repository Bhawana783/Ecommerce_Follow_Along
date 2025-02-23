import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <button 
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
        onClick={() => navigate(`/edit/${product._id}`)}
      >
        Edit
      </button>
    </div>
  );
};

export default ProductCard;
