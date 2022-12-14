import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { AuthContext } from "../Context/MainContext";
import MyProductTableData from "./MyProductTableData";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  console.log(user.email);

  // getting data by react query
  const { refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:5000/productsData/hush@gmail.com`)
        .then((res) => res.json())
        .then((result) => setProducts(result)),
  });

  // getting delete id
  const deleteID = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/productDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.error("Data deleted");
          refetch();
        }
      });
  };

  // console.warn(products)

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="top-section">
        <h1 className="text-2xl font-general font-[600] text-left pt-10">
          Your product list
        </h1>
        <p className="font-general font-[500] mb-3">
          Your all products list. Click on add to show your product add.
        </p>
      </div>
      {products.length === 0 ? (
        <div className="text-section w-full h-screen flex justify-center items-center mt-[-10%]">
          <h1 className="font-general text-4xl text center font-[500]">
            You have added no product yet.
          </h1>
        </div>
      ) : (
        <div className="table-main py-10">
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-[#F6F7F9] border-b border-gray-200">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Model
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Car tye
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Location
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Price
                  </th>
                  <th scope="col" class="py-3 px-6">
                    old price
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Used
                  </th>
                  <th scope="col" class="py-3 px-6">
                    date
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Stock
                  </th>
                  <th scope="col" class="py-3 px-6">
                    ADS
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((data) => (
                  <MyProductTableData
                    key={data._id}
                    products={data}
                    getID={deleteID}
                  ></MyProductTableData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* table part start from here */}

      {/* table part start end here */}
    </div>
  );
};

export default MyProducts;
