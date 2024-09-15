import Heading from "../components/Heading.jsx";
import MailIcon from "../../assets/MailIcon.svg";
import CallIcon from "../../assets/CallIcon.svg";
import LocationIcon from "../../assets/LocationIcon.svg";

const Info = ({ image, line }) => {
  return (
    <div className="flex space-x-4">
      <img src={image} alt="Icon" />
      <p>{line}</p>
    </div>
  );
};

const Button = ({ width, height, bgColor, borderRadius, borderColor }) => {
  return (
    <button
      style={{ width, height }} // Direct inline styles for dynamic width and height
      className={`${bgColor} ${borderRadius} ${borderColor} rounded-full`}
    ></button>
  );
};

function Contact() {
  return (
    <>
      <div className="mt-20">
        <Heading heading="Contact Us" />
        <div className="flex justify-center space-x-28">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Button width="374px" height="56px" bgColor="bg-blue-300" />
            <Button width="374px" height="56px" bgColor="bg-blue-300" />
            <Button width="374px" height="56px" bgColor="bg-blue-300" />
            <Button width="374px" height="56px" bgColor="bg-blue-300" />
            <Button
              width="168px"
              height="56px"
              bgColor="bg-white"
              borderRadius="border-2"
              borderColor="border-blue-800"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="h-[56px] w-[374px] flex items-end justify-start">
              <Info image={MailIcon} line="test@gmail.com" />
            </div>
            <div className="h-[56px] w-[374px] flex items-center justify-start">
              <Info image={CallIcon} line="(303) 555-0105" />
            </div>
            <div className="h-[56px] w-[374px] flex items-start justify-start">
              <Info
                image={LocationIcon}
                line="2715 Ash Dr. San Jose, South Dakota 83475"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
