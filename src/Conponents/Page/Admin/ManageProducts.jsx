import { useEffect, useState } from "react";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    axios.get("https://bd-calling-first-project-backend.vercel.app/products")
      .then(res => { setProducts(res.data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  };

  useEffect(() => { fetchProducts(); }, []);

  const deleteProduct = (id) => {
    axios.delete(`https://bd-calling-first-project-backend.vercel.app/products/${id}`, { withCredentials: true })
      .then(() => fetchProducts())
      .catch(err => console.error(err));
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      {products.map(product => (
        <div key={product._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img src={product.url} alt={product.name} className="w-16 h-16 object-cover rounded"/>
            <div>
              <p><b>{product.name}</b></p>
              <p>${product.price}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => deleteProduct(product._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
            {/* Update button can navigate to /admin/products/update/:id */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageProducts;