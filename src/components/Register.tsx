import { useFormik } from "formik";
import { useState } from "react";

interface RegisterPageProps {
  setAuthPage: Function;
}

function Register({ setAuthPage }: RegisterPageProps) {
  const [newOrg, setNewOrg] = useState<boolean>(false);

  
  


  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      newPassword:"",
      confirmPassword:"",
      orgName:"",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  function validate({
    name, newPassword, confirmPassword, email, orgName
  }:any){
    const errors:any = {};
    if (!name || name.length < 3) errors.name = "Name is required";
    if (!newPassword || newPassword.length < 10) errors.newPassword = "Password is required";
    if (!confirmPassword || confirmPassword !== newPassword) {
      errors.confirmPassword = "Confirm Password is required";
      errors.newPassword = "Confirm Password is required";
    }
    if (newOrg && !orgName) errors.orgName = "Organization Name is required";
    return errors;
  }

  return (
    <>
      <h1 className="font-bold text-3xl mb-5">Register</h1>

      <form
        className="form-control flex w-2/3 mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid grid-cols-2 items-center gap-5">
          <input
            required
            className={
              `input input-bordered 
              ${formik.touched.name && formik.errors.name ? "input-error" : "input-success"}`
            }
            placeholder="Enter your full name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <input
            required
            className={
              `input input-bordered 
              ${formik.touched.email && formik.errors.email ? "input-error" : "input-success"}`
            }
            placeholder="Enter an email address"
            type="email"
            name="email"
            autoComplete="email"
          />
          <input
            required
            className={
              `input input-bordered 
              ${formik.touched.newPassword && formik.errors.newPassword ? "input-error" : "input-success"}`
            }
            placeholder="Create a password"
            type="password"
            name="newPassword"
            autoComplete="new-password"
            id="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}  
          />
          <input
            required
            className={
              `input input-bordered 
              ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "input-error" : "input-success"}`
            }
            placeholder="Confirm your password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            autoComplete="new-password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
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
              required
              className={
                `input input-bordered 
                ${formik.touched.orgName && formik.errors.orgName ? "input-error" : "input-success"}`
              }
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
