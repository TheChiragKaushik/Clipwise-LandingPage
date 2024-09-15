function Heading({ heading }) {
  return (
    <>
      <div className="flex ml-[50px] items-center justify-center my-8">
       
        <div className="flex flex-col space-y-12">
          <hr className="border-t border-blue-400 w-8 transform -rotate-45" />{" "}
          
          <hr className="border-t border-blue-400 w-8 transform rotate-45" />{" "}
         
        </div>

        
        <h1 className="text-6xl font-black text-blue-700 mx-4">{heading}</h1>

        
        <div className="flex flex-col space-y-12">
          <hr className="border-t border-blue-400 w-8 transform rotate-45" />{" "}
         
          <hr className="border-t border-blue-400 w-8 transform -rotate-45" />{" "}
         
        </div>
      </div>
    </>
  );
}

export default Heading;
