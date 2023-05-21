import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://happybive-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);

  return (
    <div className="custom-container py-16">
      <div className="my-4">
        <h2 className="text-lg">
          Total Available Toys:{" "}
          <span className="text-[#FF6667] font-bold">{toys.length}</span>
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th className="bg-[#B1D22F]"></th>
              <th className="capitalize bg-[#B1D22F]">Toy Name</th>
              <th className="capitalize bg-[#B1D22F]">Sub Category</th>
              <th className="capitalize bg-[#B1D22F]">Seller</th>
              <th className="capitalize bg-[#B1D22F]">Price</th>
              <th className="capitalize bg-[#B1D22F]">Quantity</th>
              <th className="capitalize bg-[#B1D22F]">Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, i) => (
              <ToyCard key={toy._id} index={i + 1} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
