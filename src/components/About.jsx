import trash from "../../assets/Trash.svg";
import trash2 from "../../assets/Trash2.png";
import about from "../../assets/About.svg";

function About() {
  return (
    <>
      <div className="bg-[url('assets/Trash2.png')] bg-no-repeat h-[740px]" style={{backgroundImage: `url{${trash2}}`}}>
        <div className="bg-[url('assets/About.svg')] h-[740px]  bg-right bg-no-repeat bg-contain" style={{backgroundImage: `url{${about}}`}}>
          <h1 className="ml-[280px] pt-10 text-6xl font-black text-white">
            About Us
          </h1>

          <div className="flex flex-col justify-center mt-[20px]">
            <div className="flex justify-between">
              <div className="space-y-6 ml-[280px]">
                <h3 className="max-w-[50ch] text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </h3>
                <img src={trash} alt="Trash" />
              </div>
              <div className="space-y-6 mr-60">
                <h1 className="text-6xl font-black text-right text-white">Where</h1>
                <h3 className="max-w-[45ch] text-right text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </h3>
              </div>
            </div>
            <button className="mx-auto mt-28 w-[280px] h-[86px] text-2xl font-bold bg-yellow-600 rounded-full">
              Help Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
