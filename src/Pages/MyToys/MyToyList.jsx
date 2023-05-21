import { HiOutlinePencilSquare, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MyToyList = ({ toy, index, deleteToyHandler }) => {
  return (
    <tr className="hover">
      <th>{index}</th>
      {/* Toy Name */}
      <td>{toy?.toyName}</td>
      {/* Sub Category */}
      <td>{toy?.subCategory}</td>
      {/* Seller name if available */}
      <td>{toy?.sellerName ? <>{toy.sellerName}</> : <>--</>}</td>
      {/* Price */}
      <td>${toy?.price}</td>
      {/* Quantity */}
      <td>{toy?.quantity}</td>
      {/* Active */}
      <td className="space-x-2">
        <Link to={`/updateToyDetails/${toy._id}`}>
          <button className="toysListBtn">
            <HiOutlinePencilSquare className="h-6 w-6 text-[#FF6667]" />
          </button>
        </Link>
        <Link>
          <button
            onClick={() => deleteToyHandler(toy._id)}
            className="toysListBtn"
          >
            <HiXMark className="h-6 w-6 text-[#FF6667]" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyToyList;
