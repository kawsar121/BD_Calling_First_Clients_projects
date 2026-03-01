import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch("https://bd-calling-first-project-backend.vercel.app/iteams")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;

        if (carouselRef.current.scrollLeft + clientWidth >= scrollWidth) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 2; // slide speed
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, [products]);

  return (
    <div className="max-w-full overflow-hidden mt-10">
      <div
        ref={carouselRef}
        className="flex gap-2 no-scrollbar"
        style={{ overflowX: "hidden" }} // scroll hidden
      >
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/iteams/id/${product._id}`}
            className="flex-shrink-0 w-32 sm:w-36 md:w-40 lg:w-44 p-2 bg-white rounded shadow hover:scale-105 transform transition"
          >
            <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
              {product.url ? (
                <img
                  src={product.url}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400 text-xs">No Image</span>
              )}
            </div>
            <div className="mt-2 text-xs sm:text-sm">
              <p className="text-gray-500 truncate">{product.category}</p>
              <p className="font-medium text-gray-900 truncate">{product.name}</p>
              <p className="text-pink-600 font-semibold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default ProductsCarousel;