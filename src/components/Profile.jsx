import React, { useEffect, useState } from "react";

const Profile = () => {
  // State to store the fetched image URL
  const [imageUrl, setImageUrl] = useState(null);
  // State to track loading state
  const [loading, setLoading] = useState(true);
  // State to track errors
  const [error, setError] = useState(null);

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
  let data = "";

  useEffect(() => {
    // Function to fetch image data from the API
    const fetchImage = async () => {
      try {
        fetch(
          "https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08",
          options
        )
          .then((response) => response.json())
          .then((response) => (data = response.data))
          .then((data) => setImageUrl(data.imageUrl))
          .catch((err) => console.error(err));
      } catch (error) {
        // Update the state with the error information
        setError(error.message);
      } finally {
        // Stop loading, whether the request was successful or not
        setLoading(false);
      }
    };

    // Call the fetchImage function
    fetchImage();
  }, []);
  return (
    <div className='bg-white rounded-t-xl'>
      <div className='flex items-center justify-center'>
        <div className='w-[100px] drop-shadow-xl p-1 border rounded-full absolute bg-white'>
          <img src={imageUrl} alt='Profile Picture' />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <p className='font-bold mt-14 text-xl'>Rich Explorer</p>
      </div>
    </div>
  );
};

export default Profile;
