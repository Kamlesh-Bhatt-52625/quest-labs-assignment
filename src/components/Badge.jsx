import React from "react";

const Badge = ({ imageUrl }) => {
  return (
    <div className='w-full flex'>
      <div className='w-[70px]'>
        <img src={imageUrl} alt='' />
      </div>
    </div>
  );
};

export default Badge;
