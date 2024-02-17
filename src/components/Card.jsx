import React from "react";

const Card = (props) => {
  const { elem } = props;
  const { text, value } = elem;
  return (
    <div className='bg-[#7052ff] p-4 rounded-xl'>
      {text === "Rank" ? (
        <div className=' w-[75px] py-3 rounded-lg text-white text-center'>
          <h2 className='text-2xl mb-1.5 '>#{value}</h2>
          <p className='text-gray-300 '>{text}</p>
        </div>
      ) : (
        <div className=' w-[75px] py-3 rounded-lg text-white text-center'>
          <h2 className=' text-2xl '>{value}</h2>
          <p className='text-gray-300 '>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
