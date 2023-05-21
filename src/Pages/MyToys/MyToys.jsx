import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyList from "./MyToyList";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `https://happybive-server.vercel.app/toys?sellerEmail=${user.email}&sort=1`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  const deleteToyHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://happybive-server.vercel.app/toys/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = myToys.filter((toys) => toys._id !== _id);
              setMyToys(remaining);
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="custom-container py-8">
      <div className="my-4">
        <h2 className="text-lg">
          Total Toys:{" "}
          <span className="text-[#FF6667] font-bold">{myToys.length}</span>
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
            {myToys.map((toy, i) => (
              <MyToyList
                key={toy._id}
                deleteToyHandler={deleteToyHandler}
                index={i + 1}
                toy={toy}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
