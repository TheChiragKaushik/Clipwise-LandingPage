import Heading from "../components/Heading.jsx";
import icon from "../../assets/TestyIcon.svg";
import Stars from "../../assets/Stars.png";

const Card = ({ image }) => {
  return (
    <>
      <div className="w-[507px] h-[210px] p-2 rounded-3xl border overflow-hidden shadow-lg items-start bg-white justify-center">
        <div className="flex items-start mt-[10px] space-x-4 ">
          <img src={image} alt="image" />
          <div className="flex flex-col space-y-2">
            <h2 className="font-bold text-lg mb-2">Lorem Ipsum</h2>
            <p className="text-gray-600 text-sm max-w-[50ch]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <img src={Stars} className="max-w-24"/>
          </div>
        </div>
      </div>
    </>
  );
};

function Testimonials() {
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <Heading heading="Testymonials" />
        <div className="grid grid-cols-2 mx-auto gap-x-8 gap-y-8">
          <Card image={icon} />
          <Card image={icon} />
          <Card image={icon} />
          <Card image={icon} />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
