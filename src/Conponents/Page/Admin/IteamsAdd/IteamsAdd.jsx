import axios from "axios";

const IteamsAdd = () => {
  const handleformSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const details = form.details.value;
    const url = form.url.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const formsData = {name,category,url,quantity, price, details}
    console.log(formsData)
    axios.post('bd-calling-first-project-backend-ax0of9i78.vercel.app/iteams', formsData)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
        alert('Data Added successfully')
      }
    })
    .catch(error=>{
      console.log(error)
    })
    
  }
  return (
    <div className="hero bg-base-200 min-h-screen mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
            <h1 className="text-3xl text-center font-bold">Product Add!</h1>
          <form onSubmit={handleformSubmit} className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="category"
                name="category"
                className="input input-bordered"
                required
              />
            </div>
            {/* Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product image url</span>
              </label>
              <input
                type="url"
                placeholder="Url"
                name="url"
                className="input input-bordered"
                required
              />
            </div>
            {/* Quantity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered"
                required
              />
            </div>
            {/* Product Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            {/* Details Products */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Products Details</span>
              </label>
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered"
                required
              />
            </div> 
            <div className="form-control mt-3 mx-auto">
              <button className="btn btn-neutral mt-4 text-black bg-yellow-300 p-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IteamsAdd;
