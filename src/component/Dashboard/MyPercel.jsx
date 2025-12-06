import { useQuery } from "@tanstack/react-query";
import useUserSecure from "../../hooks/useUserSecure";
import useAuth from "../../hooks/useAuth";
import { FaRegTrashCan } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";


const MyPercel = () => {
  const axioxSecure = useUserSecure();
  const { user } = useAuth();
  const { data: parcels = [], refetch,} = useQuery({
    queryKey: ["my-Percels", user.email],
    queryFn: async () => {
      const data = await axioxSecure.get(`/SendPercels?email=${user.email}`);
      console.log(data.data);
      return data.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure!",
      text: "You Want to delete tour Percel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await axioxSecure.delete(`/SendPercels/${id}`);
        if (data.data.deletedCount) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold -ms-2.5 mt-4 text-secondary capitalize">
        {" "}
        total percel : {parcels.length}
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Sender Name</th>
                <th>Percel Name</th>
                <th> Type</th>
                <th> Weight</th>
                <th> cost</th>
                <th>createdAt</th>
                <th>receiverName</th>
                <th>Delivery Status</th>
                <th>Payment Status</th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <th>
                    <h1>{parcel.senderName}</h1>
                    <h1 className="font-normal text-gray-500">
                      {parcel.senderEmail}
                    </h1>
                  </th>
                  <th>{parcel.PercelName}</th>
                  <th>{parcel.percelType}</th>
                  <th>{parcel.percelWeight}</th>
                  <th>{parcel.cost}</th>
                  <th>{parcel.createdAt}</th>
                  <th>
                    <h1>{parcel.receiverName}</h1>
                    <h1 className="font-normal text-gray-500">
                      {parcel.receiverEmail}
                    </h1>
                  </th>
                  <th>{parcel.deliveryStatus}</th>
                  <td>
  {parcel.parcelStatus === 'paid' 
    ? <p className="btn btn-sm btn-primary text-black">Paid</p> 
    : <Link to={`/Dashboard/Payment/${parcel._id}`} className="btn btn-sm border-2 border-primary bg-white">
        Pay
      </Link>
  }
</td>
                  <th className="flex ">
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(parcel._id)}
                    >
                      <FaRegTrashCan />
                    </button>
                    <button className="btn btn-sm mx-2">
                      <BiEdit />
                    </button>
                    <button className="btn btn-sm">
                      <FaSearch />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPercel;
