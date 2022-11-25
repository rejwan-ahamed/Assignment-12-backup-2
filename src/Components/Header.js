import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/MainContext";

const Header = () => {
  const { userLogout, user, userState } = useContext(AuthContext);
  console.warn(userState);
  // getting user state from local storage
  const userSateFromLocalStorage = localStorage.getItem("AccountStatus");

  const userLogoutButtonClicked = () => {
    userLogout();
  };
  console.log(user);
  return (
    <div class>
      <div className="nav-main border-b font-general">
        <Navbar
          fluid={true}
          rounded={true}
          className="md:mx-20 lg:mx-20 xl:mx-40 bg-[#F6F7F9]"
        >
          <Link to="/" className="flex">
            <img
              src="/Images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              GariDhako.com
            </span>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="font-[500] ">
            <Link to="/" className="hover:text-blue-700 mt-2">
              Home
            </Link>
            <Link to="/blog" className="hover:text-blue-700 mt-2">
              Blogs
            </Link>
            <Link to="/categorys" className="hover:text-blue-700 mt-2">
              Category
            </Link>

            {userState === "Seller" ? (
              <>
                {" "}
                <Link to="/add" className="hover:text-blue-700 mt-2">
                  Add product
                </Link>
                <Link to="/products" className="hover:text-blue-700 mt-2">
                  My Products
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link to="/wish" className="hover:text-blue-700 mt-2">
                  Wish List
                </Link>
                <Link to="/order" className="hover:text-blue-700 mt-2">
                  My orders
                </Link>
              </>
            )}

            {user ? (
              <Link
                onClick={userLogoutButtonClicked}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
              >
                Logout
              </Link>
            ) : (
              <div className="button-group sm:flex justify-center items-center gap-2 ">
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
