import { useState } from "react";
import { useQuery } from "react-query";
import { LoginDetails } from "../lib/api";
import { AuthService } from "../lib/api/auth";

interface LoginPageProps {
  setAuthPage: Function;
}

function Login({ setAuthPage }: LoginPageProps) {
  const authAPI = new AuthService();
  const [loginInfo, setLoginInfo] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  // const [email, setemail] = useState("");
  // const [password, setPassword] = useState("");
   const [usererror, setUserError] = useState("");
  const [passerror, setPassError] = useState("");
  const { data, error, refetch } = useQuery(
    "login",
    () => {
      authAPI.login(loginInfo);
    },
    {
      enabled: false,
      refetchInterval: Infinity,
    }
  );
  const validate = () => {
    const errors = {};
    if (email.length < 3) {
      errors.email = "Username must be atleast 3 characters";
    }
    if (password.length < 3) {
      errors.password = "Password must be atleast 3 characters";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };
 
const handleSubmit = (e) => {
  e.preventDefault();
  refetch();
  const errors = validate();
  if (errors) {
    setUserError(errors.username);
    setPassError(errors.password);
  } else {
    setUserError("");
    setPassError("");
  }
}
  return (
    <>
      <h1 className="font-bold text-3xl mb-5">Sign In</h1>

      <form
        className="form-control flex w-2/3 mx-auto"
        onSubmit={handleSubmit }
      
      >
        <input
          className="input input-bordered input-success"
          placeholder="Enter an email address"
          type="email"
          name="email"
          autoComplete="email"
          value={loginInfo.email}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
        />
          <div className="text-red-500 text-sm">{usererror}</div>

        <input
          className="input input-bordered input-success my-5"
          placeholder="Enter your password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />
                  <div className="text-red-500 text-sm">{passerror}</div>


        <div className="flex">
          <p
            onClick={() => {
              setAuthPage("register");
            }}
            className="mr-auto text-sky-600 mb-5 hover:cursor-pointer"
          >
            Create a new account
          </p>
          <p className="ml-auto mb-5 hover:cursor-pointer">
            Forgot password ? 😕
          </p>
        </div>

        <button
          type="submit"
          className="w-1/2 mx-auto btn btn-primary capitalize"
        >
          Login
        </button>
      </form>
    </>
  );
}
export default Login;
