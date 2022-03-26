interface LoginPageProps {
  setAuthPage: Function;
}

function Login({ setAuthPage }: LoginPageProps) {
  return (
    <>
      <h1 className="font-bold text-3xl mb-5">Sign In</h1>

      <form
        className="form-control flex w-2/3 mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="input input-bordered input-success"
          placeholder="Enter an email address"
          type="email"
          name="email"
          autoComplete="email"
        />

        <input
          className="input input-bordered input-success my-5"
          placeholder="Create a strong password"
          type="password"
          name="current-password"
          autoComplete="current-password"
        />

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
