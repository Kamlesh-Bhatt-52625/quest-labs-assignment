import React, { useState } from "react";
import PopupModal from "./PopupModal";

const Badge = ({ imageUrl, elem }) => {
  // State to store the popup image
  const [popupImg, setPopupImg] = useState(null);
  // State to open or close the popup modal
  const [open, setOpen] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
      userid: "u-a2399489-9cd0-4c94-ad12-568379202b08",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
    },
  };

  const getBadgeData = (badgeId) => {
    fetch(
      `https://staging.questprotocol.xyz/api/entities/e-0000000000/badges/${badgeId}?userId=u-a2399489-9cd0-4c94-ad12-568379202b08`,
      options
    )
      .then((response) => response.json())
      .then((response) => setPopupImg(response.data.badge_data.imageUrl))
      .catch((err) => console.error(err));
  };

  // console.log(popupImg);

  return (
    <div className='w-full flex'>
      <div className='w-24 cursor-pointer'>
        <img
          src={imageUrl}
          alt=''
          onClick={() => {
            getBadgeData(elem.badgeId);
            setOpen(true);
          }}
        />
      </div>
      <PopupModal
        imgUrl={popupImg}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Badge;
