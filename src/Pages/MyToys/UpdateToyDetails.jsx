import { useLoaderData } from "react-router-dom";

const UpdateToyDetails = () => {
  const loadedToy = useLoaderData();
  console.log(loadedToy);

  const updateToyHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const img = form.img.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const ratings = form.ratings.value;
    const description = form.description.value;

    const updateToy = {
      img,
      toyName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      ratings,
      quantity,
      description,
    };
    console.log(updateToy);

    fetch(`http://localhost:5000/toys/${loadedToy._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className=" py-8 bg-gray-200">
      <div className="custom-container">
        <div className="hero-content">
          <div className="card w-full shadow bg-base-100">
            <form onSubmit={updateToyHandler} className="card-body">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Toy Image */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Toy Photo Url</span>
                    </label>
                    <input
                      type="url"
                      name="img"
                      placeholder="toy image url"
                      className="input input-bordered"
                      defaultValue={loadedToy?.img}
                    />
                  </div>
                  {/* Toy Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Toy Name</span>
                    </label>
                    <input
                      type="text"
                      name="toyName"
                      placeholder="Toy Name"
                      className="input input-bordered"
                      defaultValue={loadedToy?.toyName}
                      disabled
                    />
                  </div>
                  {/* Seller Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller Name</span>
                    </label>
                    <input
                      type="text"
                      name="sellerName"
                      defaultValue={loadedToy?.sellerName}
                      placeholder="Seller Name"
                      className="input input-bordered"
                      disabled
                    />
                  </div>
                  {/* Seller Email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller E-mail</span>
                    </label>
                    <input
                      type="email"
                      name="sellerEmail"
                      defaultValue={loadedToy?.sellerEmail}
                      placeholder="Seller Name"
                      className="input input-bordered"
                      disabled
                    />
                  </div>
                  {/* Sub Category */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Pick the best fantasy franchise
                      </span>
                    </label>
                    <select
                      className="select select-bordered"
                      name="subCategory"
                      defaultValue={loadedToy?.subCategory}
                      disabled
                    >
                      <option disabled selected>
                        Pick one
                      </option>
                      <option>ScienceTab</option>
                      <option>EngineeringKits</option>
                      <option>EngineeringTools</option>
                    </select>
                  </div>
                  {/* Price */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      className="input input-bordered"
                      defaultValue={loadedToy?.price}
                    />
                  </div>
                  {/* quantity */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Quantity</span>
                    </label>
                    <input
                      type="Number"
                      name="quantity"
                      placeholder="Quantity"
                      className="input input-bordered"
                      defaultValue={loadedToy?.quantity}
                    />
                  </div>
                  {/* Ratings */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Ratings</span>
                    </label>
                    <input
                      type="Number"
                      name="ratings"
                      placeholder="Ratings"
                      className="input input-bordered"
                      defaultValue={loadedToy?.ratings}
                      disabled
                    />
                  </div>
                </div>
                {/* Textarea */}
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="description"
                      name="description"
                      defaultValue={loadedToy?.description}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn custom-btn text-xl capitalize">
                  Update Toy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToyDetails;
