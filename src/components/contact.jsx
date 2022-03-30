import ContactUs from "../assets/images/icons/contact_us.svg";

const Contact = () => {
    return (
        <div>
        <div className="shadow-lg flex">
            <div className=" h-max w-full flex p-5">
                <img src={ContactUs} />
</div>

<div className="p-2 w-full text-center bg-violet-100">
        <h1 className="text-4xl text-grey-500 my-5 underline decoration-violet-700">
          <i> Contact Us</i>
        </h1>
        <div className="text-sm text-grey-500 my-2">
          <p>For any Query you can freely <br/> contact with our Team</p>
     </div>

     <div className="text-md text-grey-500 my-2 ">
         <u className="font-bold">Phone Number</u>
            <p>+92-9888888888</p>
     </div>
     
     <div className="text-md text-grey-500 my-2 ">
         <u className="font-bold">Email Address</u>
            <p>example@example.com</p>
     </div>
     
     <div className="text-md text-grey-500 my-2 ">
         <u className="font-bold">Location</u>
            <p>91-DHA Sector II PIA Road, Lahore, Pakistan</p>
     </div>
      </div>
</div>      

<div className=" text-center">
    <h1 className="p-3 text-6xl "><b>All Inqueries</b></h1>
<p className="p-10 m-10 text-md text-grey-500 my-2">
    For all Services inqueries, please fill out the form and we'll get back to you as sson as possible.
    <br/>We'll be happy to answer all of your questions and make sure you have an amazing experience with <q>Effertaero</q>.
</p>
<form className="form-control flex w-2/3 mx-auto"
onClick={(e)=>{
    e.preventDefault();}}>
<div className="grid grid-cols-2 items-center gap-5">
          <input
            className="input input-bordered border-violet-500"
            placeholder="Enter your full name"
            type="text"
            name="name"
          />
          <input
            className="input input-bordered border-violet-500"
            placeholder="Enter an email address"
            type="email"
            name="email"
            autoComplete="email"
          />
            <input
            className="input input-bordered border-violet-500"
            placeholder="Enter an email address"
            type="email"
            name="email"
            autoComplete="email"
          />
            <input
            className="input input-bordered border-violet-500"
            placeholder="Enter an email address"
            type="email"
            name="email"
            autoComplete="email"
          />
           </div>
          
          <input
            className="block p-4 my-5 input input-bordered items-center border-violet-500"
            placeholder="Comment"
            type="text"
            name="comment"
            autoComplete="comment"
          />
          <button
            type="submit"
            className="btn w-1/2 mx-auto my-2 bg-violet-600 text-white mb-5 m"
            href="/login"
          >
            submit
          </button>

</form>
</div>

</div>
    );
    }
export default Contact;
