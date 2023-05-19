const AllToys = () => {
  return (
    <div className="custom-container pt-16">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th></th>
              <th className="capitalize">Toy Name</th>
              <th>Sub Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              {/* Toy Name */}
              <td>Cy Ganderton</td>
              {/* Sub Category */}
              <td>Quality Control Specialist</td>
              {/* Seller name if available */}
              <td>Blue</td>
              {/* Price */}
              <td>Blue</td>
              {/* Quantity */}
              <td>Blue</td>
              {/* Active */}
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
