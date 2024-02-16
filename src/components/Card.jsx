import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div className='bg-[#7052ff] p-4 rounded-xl w-24'>
      {props.elem.text === "Rank" ? (
        <h2 className='text-white text-2xl mb-1.5 flex items-center justify-center'>
          #{props.elem.value}
        </h2>
      ) : (
        <h2 className='text-white text-2xl mb-1.5 flex items-center justify-center'>
          {props.elem.value}
        </h2>
      )}

      <p className='text-gray-300 flex items-center justify-center'>
        {props.elem.text}
      </p>
    </div>
  );
};

export default Card;
