// import React, { useState } from "react";
// import { Button, Input } from "@material-tailwind/react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// import { MdError } from "react-icons/md";

// function Sigmup() {
//   const nav = useNavigate();
//   const [Valeus, setValeus] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   //

//   const [emailerros, setemailerros] = useState([]);

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:2500/singup", Valeus)
//       .then((respons) => {
//         const error = respons.data.errors;
//         if (error) {
//           setemailerros(
//             error.filter((error) => {
//               return error.param == "email";
//             })
//           );
//         } else {
//           nav("/");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="bg-[#1e1e1e] flex justify-center  flex-col  h-screen">
//       <div className="bg-[#ffffff] mx-auto rounded-md p-4   ">
//         <form
//           noValidate
//           className="pt-6 px-11 flex flex-col justify-between items-center h-full"
//           onSubmit={handelSubmit}
//         >
//           <h1 className="font-bold  text-lg mb-5">Sing up</h1>
//           {/* name */}
//           <div className="relative my-4">
//             <Input
//               type="text"
//               label="Name"
//               name="name"
//               onChange={(e) => {
//                 setValeus((prev) => {
//                   const newName = { name: e.target.value };
//                   return { ...prev, ...newName };
//                 });
//               }}
//             />
//           </div>
//           {/* email */}
//           <div className="relative my-4">
//             <Input
//               error={emailerros.length > 0 ? true : false}
//               type="email"
//               label="email"
//               name="email"
//               onChange={(e) => {
//                 setValeus((prev) => {
//                   const newemail = { email: e.target.value };
//                   return { ...prev, ...newemail };
//                 });
//               }}
//             />
//             {(emailerros.length > 0 ? true : false) && (
//               <p className=" ml-1 mt-1 text-sm text-red-500 flex items-center gap-1 ">
//                 <MdError />
//                 {emailerros[0].msg}
//               </p>
//             )}
//           </div>
//           {/* password */}
//           <div className=" my-4 relative ">
//             <Input
//               type="password"
//               label="Password"
//               name="password"
//               onChange={(e) => {
//                 setValeus((prev) => {
//                   const newpassword = { password: e.target.value };
//                   return { ...prev, ...newpassword };
//                 });
//               }}
//             />
//           </div>
//           <div className="mt-4 flex flex-col">
//             <Button className="mt-5 mx-auto " type="submit">
//               Sing up
//             </Button>
//             <p className="mt-6 text-gray-600">
//               alredy have an acounte ?{" "}
//               <Link className="text-gray-900 underline" to="/">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Sigmup;
