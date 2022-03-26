import { useState } from "react";

interface RegisterPageProps {
  setAuthPage: Function;
}

function Register({ setAuthPage }: RegisterPageProps) {
  const [newOrg, setNewOrg] = useState<boolean>(false);

  return (
    <>
      <h1 className="font-bold text-3xl mb-5">Register</h1>

      <form
        className="form-control flex w-2/3 mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-2 items-center gap-5">
          <input
            className="input input-bordered input-success"
            placeholder="Enter your full name"
            type="text"
            name="name"
          />
          <input
            className="input input-bordered input-success"
            placeholder="Enter an email address"
            type="email"
            name="email"
            autoComplete="email"
          />
          <input
            className="input input-bordered input-success "
            placeholder="Create a password"
            type="password"
            name="password"
            autoComplete="new-password"
          />
          <input
            className="input input-bordered input-success "
            placeholder="Confirm your password"
            type="password"
            name="password"
            autoComplete="new-password"
          />
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">
                I'm creating a new organization
              </span>
              <input
                type="checkbox"
                className="toggle"
                checked={newOrg}
                onChange={() => {
                  setNewOrg(!newOrg);
                }}
              />
            </label>
          </div>

          {newOrg && (
            <input
              className="input input-bordered input-success "
              placeholder="Enter your organization name"
              type="text"
              name="organization-name"
              autoComplete="organization-name"
            />
          )}
        </div>

        <p
          className="hover:cursor-pointer my-5"
          onClick={() => {
            setAuthPage("login");
          }}
        >
          Already have an account ?
        </p>

        <button
          type="submit"
          className="w-1/2 mx-auto btn btn-primary capitalize"
        >
          Register
        </button>
      </form>
    </>
  );
}
export default Register;
