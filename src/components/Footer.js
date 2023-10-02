// import { Typography } from "@material-tailwind/react";

// export function Footer() {
//   return (
//     <footer className="w-full bg-black p-8">
//       <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center msm:justify-between md:justify-between">
//         {/* <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
//         <Typography className="text-3xl text-white">NepMovies</Typography>
//         <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
//           <li>
//             <Typography
//               as="a"
//               href="#"
//               color="blue-gray"
//               className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
//             >
//               About Us
//             </Typography>
//           </li>
//           <li>
//             <Typography
//               as="a"
//               href="#"
//               color="blue-gray"
//               className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
//             >
//               License
//             </Typography>
//           </li>
//           <li>
//             <Typography
//               as="a"
//               href="#"
//               color="blue-gray"
//               className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
//             >
//               Contribute
//             </Typography>
//           </li>
//           <li>
//             <Typography
//               as="a"
//               href="#"
//               color="blue-gray"
//               className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
//             >
//               Contact Us
//             </Typography>
//           </li>
//         </ul>
//       </div>
//       <hr className="my-8 border-blue-gray-50" />
//       <Typography
//         color="blue-gray"
//         className="text-center font-normal text-white "
//       >
//         &copy; 2023 NepMovies
//       </Typography>
//     </footer>
//   );
// }





import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-col md:flex-row  justify-between items-center gap-y-6 gap-x-12 text-center ">
        {/* <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
        <Typography className="text-3xl text-white">NepMovies</Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mmd:gap-x-0 mmd:flex-row space-x-3">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center font-normal text-white"
      >
        &copy; 2023 NepMovies
      </Typography>
    </footer>
  );
}

