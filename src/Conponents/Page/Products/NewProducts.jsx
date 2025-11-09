import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const [showProducts, setShowProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("bd-calling-first-project-backend-ax0of9i78.vercel.app/iteams")
      .then((res) => res.json())
      .then((data) => {
        setShowProducts(data);
      });
  }, []);

  const displayedProducts = showAll ? showProducts : showProducts.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex justify-between px-10 mb-5">
        <p className="text-pink-600 font-medium whitespace-nowrap">
          New Arrive 
        </p>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-pink-600 font-medium whitespace-nowrap hover:underline"
        >
          {showAll ? "Show Less ←" : "View All Products →"}
        </button>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-5 justify-center items-start gap-3">
        {displayedProducts.map((product) => (
          <Link key={product._id} to={`/iteams/id/${product._id}`}>
            <div className="max-w-xs w-4/5 mx-auto rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full ">
              {/* Image section (fixed height) */}
              <div className="transform scale-110 hover:scale-100 transition-transform duration-500 w-full h-44 bg-gray-200 flex items-center justify-center overflow-hidden">
                {product.url ? (
                  <img
                    className="object-cover w-full h-full"
                    src={product.url}
                    alt={product.name}
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </div>

              {/* Text section */}
              <div className="px-6 py-4 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-gray-700 text-xs mb-1">
                    {product.category}
                  </p>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
