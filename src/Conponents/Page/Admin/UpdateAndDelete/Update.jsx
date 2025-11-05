import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const loader = useLoaderData();
  const navigate = useNavigate()
  console.log(loader);
  const { name, _id, url, quantity, price, category, details } = loader;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      name: form.name.value,
      price: form.price.value,
      details: form.details.value,
      category: form.category.value,
      quantity: form.quantity.value,
      url: form.url.value,
    };
    console.log(updatedProduct)
    axios.put(`https://kb-fcszt4c44-kawsars-projects-6c73758e.vercel.app//iteams/${_id}`, updatedProduct)
    .then(res=>{
        if (res.data) {
          alert("Product updated successfully!");
          navigate("/collections");
        }
    })
    .catch((err) => console.error(err));
  };
  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-5 text-center">
        Update Product
      </h2>

      <form onSubmit={handleUpdate} className="space-y-2">
        <div>
          <label htmlFor="" className="text-red-400 font-bold">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Product Name"
            className="input input-bordered text-sm w-full border-2 outline-none "
          />
        </div>
        <div>
          <label htmlFor="" className="text-red-400 font-bold">
            Product details
          </label>
          <input
            type="text"
            name="details"
            defaultValue={details}
            placeholder="Product details"
            className="input input-bordered text-sm w-full border-2 outline-none "
          />
        </div>
        <div>
          <label htmlFor="" className="text-red-400 font-bold">
            Product Price
          </label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            placeholder="Price"
            className="input input-bordered text-sm w-full border-2 outline-none "
          />
        </div>
        <div>
          <label htmlFor="" className="text-red-400 font-bold">
            Product Category
          </label>
          <input
            type="text"
            name="category"
            defaultValue={category}
            placeholder="Category"
            className="input input-bordered text-sm w-full border-2 outline-none "
          />
        </div>
        <div>
          <label htmlFor="" className="text-red-400 font-bold">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            defaultValue={quantity}
            placeholder="Quantity"
            className="input input-bordered text-sm w-full border-2 outline-none "
          />
        </div>
        <div>
          <label htmlFor="" className="text-red-400 font-bold">
            Image URL
          </label>
          <input
            type="text"
            name="url"
            defaultValue={url}
            placeholder="Image URL"
            className="input input-bordered text-sm w-full border-2 outline-none "
          />
        </div>

        <button type="submit" className="btn bg-sky-500 text-white w-full">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Update;
