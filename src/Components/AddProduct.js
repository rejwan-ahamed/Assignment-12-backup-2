import moment from "moment/moment";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/MainContext";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const productData = (e) => {
    const postTime = moment().format("lll");
    e.preventDefault();
    const from = e.target;
    const model = from.model.value;
    const image = from.image.value;
    const carType = from.carType.value;
    const price = from.price.value;
    const location = from.location.value;
    const oldPrice = from.oldPrice.value;
    const UsedTime = from.UsedTime.value;

    const product = {
      seller: user.email,
      model: model,
      image: image,
      carType: carType,
      price: price,
      oldPrice: oldPrice,
      location: location,
      UsedTime: UsedTime,
      postTime: postTime,
      report: "false",
      add: "false",
      soldOut: "In stock",
    };

    fetch(`${process.env.REACT_APP_API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("your product has been added");
        console.warn(result);
        from.reset();
      });
  };
  return (
    <div className="px-8 sm:px-40 pb-20 pt-10">
      <h1 className="font-general text-center text-3xl font-[600] py-10">
        Add your products.
      </h1>
      <form onSubmit={productData}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Car model
            </label>
            <input
              name="model"
              type="text"
              id="first_name"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="service name"
              required=""
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image (URL)
            </label>
            <input
              name="image"
              type="url"
              id="last_name"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="google.com"
              required=""
            />
          </div>
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select car type
            </label>
            <select
              name="carType"
              id="countries"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose your Car type</option>
              <option value="Ford">Ford</option>
              <option value="porsche">Porsche</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Lamborghini">Lamborghini</option>
            </select>
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              name="price"
              type="number"
              id="company"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="290"
              required=""
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Location
            </label>
            <input
              name="location"
              type="text"
              id="company"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="290"
              required=""
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Old price
            </label>
            <input
              name="oldPrice"
              type="number"
              id="company"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="290"
              required=""
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Used Time
            </label>
            <input
              name="UsedTime"
              type="number"
              id="company"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="290"
              required=""
            />
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
