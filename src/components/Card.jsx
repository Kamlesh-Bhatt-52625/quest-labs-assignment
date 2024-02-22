import React from "react";

const Card = (props) => {
  const { elem } = props;
  const { text, value } = elem;
  return (
    <div className='sm:w-auto sm:h-auto w-20 h-20 bg-[#7052ff] p-4 rounded-xl'>
      {text === "Rank" ? (
        <div className='py-3 rounded-lg text-white text-center'>
          <h2 className='sm:text-2xl text-xl mb-1.5 '>#{value}</h2>
          <p className='text-gray-300 '>{text}</p>
        </div>
      ) : (
        <div className='py-3 rounded-lg text-white text-center'>
          <h2 className=' sm:text-2xl text-xl '>{value}</h2>
          <p className='text-gray-300 '>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
