import React from "react";

const Card = (props) => {
  const { elem } = props;
  const { text, value } = elem;
  return (
    <div className='bg-[#7052ff] p-4 rounded-xl w-24'>
      {text === "Rank" ? (
        <h2 className='text-white text-2xl mb-1.5 flex items-center justify-center'>
          #{value}
        </h2>
      ) : (
        <h2 className='text-white text-2xl mb-1.5 flex items-center justify-center'>
          {value}
        </h2>
      )}

      <p className='text-gray-300 flex items-center justify-center'>{text}</p>
    </div>
  );
};

export default Card;
