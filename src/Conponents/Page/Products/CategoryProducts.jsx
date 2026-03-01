import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://bd-calling-first-project-backend.vercel.app/iteams")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row gap-6 px-4">
      
      {/* Left: Category Filter */}
      <div className="md:w-1/5 bg-white shadow-lg rounded p-4 sticky top-20 h-max">
        <h3 className="font-bold text-lg mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-2 py-1 rounded ${
                  selectedCategory === cat
                    ? "bg-pink-600 text-white"
                    : "hover:bg-pink-100"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Product Grid */}
      <div className="md:w-4/5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full mt-10 text-gray-500">
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <Link key={product._id} to={`/iteams/id/${product._id}`}>
              <div className="max-w-xs w-4/5 mx-auto rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
                {/* Image */}
                <div className="h-44 w-full bg-gray-200 flex items-center justify-center overflow-hidden transform scale-110 hover:scale-100 transition-transform duration-500">
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

                {/* Text */}
                <div className="px-4 py-3 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="text-gray-700 text-xs mb-1">
                      {product.category}
                    </p>
                    <p className="text-black font-medium text-lg mb-1 line-clamp-1">
                      {product.name}
                    </p>
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
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;