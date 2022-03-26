import GitHubIcon from "../assets/images/icons/icons8-octocat.svg";
import GoogleLogo from "../assets/images/icons/icons8-google.svg";
import FacebookLogo from "../assets/images/icons/icons8-facebook.svg";
import Login from "./Login";
import { useState } from "react";
import Register from "./Register";

export const Auth = () => {
  const logoSize = 30;
  const [authPage, setAuthPage] = useState("login");
  return (
    <div className="flex">
      <div className="h-screen w-2/3 flex bg-blue-400 p-5">
        <div className="m-auto w-full text-center">
          <h1 className="text-xl font-bold">Save some clicks, use OAuth</h1>

          <button className="btn bg-sky-900 w-4/5 mt-5">
            <img
              className="mr-5 hidden lg:block"
              src={GitHubIcon}
              width={logoSize}
              height={logoSize}
            />
            Continue with Github
          </button>

          <button className="btn btn-warning bg-amber-400 text-slate-900 w-4/5 my-3">
            <img
              className="mr-5 hidden lg:block"
              src={GoogleLogo}
              width={logoSize}
              height={logoSize}
            />
            Continue with Google
          </button>

          <button className="btn btn-info bg-sky-400 text-slate-900 w-4/5">
            <img
              className="mr-5 hidden lg:block"
              src={FacebookLogo}
              width={logoSize}
              height={logoSize}
            />
            Continue with Facebook
          </button>
        </div>
      </div>

      <div className="p-5 w-full text-center">
        <h1 className="text-5xl my-20 font-semibold">
          Effort Aero
          <p className="text-2xl my-5 font-light capitalize">
            software cost estimation redefined 🚀
          </p>
        </h1>

        {authPage === "login" ? (
          <Login setAuthPage={setAuthPage} />
        ) : (
          <Register setAuthPage={setAuthPage} />
        )}
      </div>
    </div>
  );
};
