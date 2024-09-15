import logo from "../assets/Logo.svg";
import logo1 from "../assets/Logo.png";

function Header() {
  return (
    <>
      <div className="bg-[url('assets/Header.svg')] bg-no-repeat bg-contain w-[1100px] h-[750px]">
        <div className="flex flex-col items-center pt-[70px] justify-center">
          <img src={logo} className="w-[349px] h-[87px]	ml-[570px]" alt="Logo" />

          <div className="mt-[100px] ml-[570px] flex flex-col items-center justify-center space-y-4">
            <button className="bg-blue-400 h-[50px] w-[150px] rounded-3xl font-semibold text-2xl text-white">
              Experts
            </button>
            <h1 className="text-6xl text-gray-600 font-poppins font-thin">
              Lorem 
            </h1>
              <h1 className="font-black text-6xl text-gray-700 font-poppins">Lorem lorem</h1>
            <p className="text-center px-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              eligendi possimus accusamus illo sequi distinctio perspiciatis,
              iure dolorum, alias in debitis reprehenderit tempora nostrum.
            </p>
            <button className="w-[280px] h-[70px] bg-blue-500 rounded-full font-semibold text-2xl text-white">
              Help Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
