import React, { Fragment, useState } from "react";
import Badge from "./Badge";

const Options = ({ badge }) => {
  const [toggle, setToggle] = useState(1);

  console.log(badge);
  return (
    <div className='m-4 mt-6'>
      <ul className='flex justify-between text-[#c3c3c3] '>
        <li className={"font-semibold cursor-pointer"}>Membership</li>
        <li
          className={
            toggle === 1
              ? "text-[#8c74ff] font-semibold cursor-pointer underline underline-offset-4"
              : "font-semibold cursor-pointer"
          }
          onClick={() => setToggle(1)}>
          Badges
        </li>
        <li
          className={
            toggle === 2
              ? "text-[#8c74ff] font-semibold cursor-pointer underline underline-offset-4"
              : "font-semibold cursor-pointer"
          }
          onClick={() => setToggle(2)}>
          Point History
        </li>
      </ul>
      {toggle === 1 ? (
        <div className='grid grid-cols-3 sm:grid-cols-7 gap-x-14 mt-4 '>
          {badge?.map((elem) => (
            <Fragment key={elem.id}>
              <Badge imageUrl={elem.imageUrl} />
            </Fragment>
          ))}
        </div>
      ) : (
        <Badge />
      )}
    </div>
  );
};

export default Options;
