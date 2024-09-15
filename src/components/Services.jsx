import Heading from "./Heading";
import Services1 from "../../assets/Services1.svg";
import Services2 from "../../assets/Services2.svg";
import Services3 from "../../assets/Services3.svg";

const Card = ({ image }) => {
  return (
    <>
      <div className="w-[385px] h-[504px] rounded-3xl overflow-hidden shadow-lg bg-white">
        <img
          src={image}
          alt="Garbage bag"
          className="w-full h-[290px] object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg mb-2">Lorem Ipsum</h2>
          <p className="text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
        </div>
      </div>
    </>
  );
};
function Services() {
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <Heading heading="Services" />
        <div className="grid grid-cols-3 w-max mx-auto gap-x-4 mt-8">
          <Card image={Services1} />
          <Card image={Services2} />
          <Card image={Services3} />
        </div>
        <button className="w-[280px] h-[70px] mt-10 mx-auto bg-blue-500 rounded-full font-semibold text-2xl text-white">
          Help Me
        </button>
      </div>
    </>
  );
}

export default Services;
