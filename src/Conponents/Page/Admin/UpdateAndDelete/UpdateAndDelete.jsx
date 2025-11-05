import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UpdateAndDelete = () => {
  const [showProducts, setShowProducts] = useState([]);
  //   console.log(showProducts._id)
  useEffect(() => {
    fetch("https://kb-fcszt4c44-kawsars-projects-6c73758e.vercel.app//iteams")
      .then((res) => res.json())
      .then((data) => {
        setShowProducts(data);
      });
  }, []);

  // Delete
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://kb-fcszt4c44-kawsars-projects-6c73758e.vercel.app//iteams/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          // UI theke jate remove haw
          const remaining = showProducts.filter((item) => item._id !== id);
          setShowProducts(remaining);
          alert("successfully Card Delted")
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="max-w-7xl mx-auto mt-24">
      <h2 className="text-center my-5 text-xl font-semibold">
        Total Product : {showProducts.length}
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-start gap-5">
        {showProducts.map((product) => (
          <div className="max-w-xs w-4/5 mx-auto rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
            {/* Image section (fixed height) */}
            <div className="flex gap-10">
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                {product.url ? (
                  <img
                    className="transform scale-110 hover:scale-100 transition-transform duration-500 object-cover w-full h-full"
                    src={product.url}
                    alt={product.name}
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </div>
              <div className="w-20 flex flex-col gap-5">
                <Link to="/" className="btn bg-sky-400">
                  View
                </Link>
                <Link to={`/update/${product._id}`} className="btn bg-sky-400">Update</Link>
                <Link
                  onClick={() => handleDelete(product._id)}
                  className="btn bg-sky-400"
                >
                  Delete
                </Link>
              </div>
            </div>

            {/* Text section */}
            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-gray-700 text-xs mb-1">{product.category}</p>
                <div className="font-medium text-black text-lg mb-2 line-clamp-1">
                  {product.name}
                </div>
                <p className="text-gray-900 text-lg font-thin mb-2">
                  ${product.price}
                </p>
              </div>

              <div className="flex items-center mt-auto">
                <span className="text-gray-700 text-sm mr-1">4.8</span>
                <svg
                  className="w-4 h-4 text-yellow-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.425 8.165 1.19-5.918 5.772 1.399 8.139L12 18.896l-7.314 3.852 1.399-8.139-5.918-5.772 8.165-1.19L12 .587z" />
                </svg>
                <span className="text-gray-600 text-sm ml-1">
                  ({product.quantity})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateAndDelete;
