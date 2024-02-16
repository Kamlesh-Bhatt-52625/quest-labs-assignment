import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import Options from "./Options";

const Profile = () => {
  // State to store the fetched image URL
  const [imageUrl, setImageUrl] = useState(null);
  // State to track loading state
  const [loading, setLoading] = useState(true);
  // State to track errors
  const [error, setError] = useState(null);
  // State to store the fetched points
  const [point, setPoint] = useState(null);
  // State to store the fetched level
  const [level, setLevel] = useState(null);
  // State to store the fetched Rank
  const [rank, setRank] = useState(null);
  // State to store the fetched Badge's data
  const [badge, setBadge] = useState([]);

  // Array to store the point, level and rank
  let dataArray = [
    {
      id: "1",
      value: "",
      text: "Points",
    },
    {
      id: "2",
      value: "",
      text: "Rank",
    },
    {
      id: "3",
      value: "",
      text: "Level",
    },
  ];

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

  // Function to fetch image data from the API
  const fetchImage = async () => {
    try {
      fetch(
        "https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08",
        options
      )
        .then((response) => response.json())
        .then((response) => setImageUrl(response.data.imageUrl))
        .catch((err) => console.error(err));
    } catch (error) {
      // Update the state with the error information
      setError(error.message);
    } finally {
      // Stop loading, whether the request was successful or not
      setLoading(false);
    }
  };

  // Function to fetch Points and Level data from the api
  const fetchPointandLevel = async () => {
    try {
      fetch(
        "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setPoint(response.data);
          setLevel(response.tier);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to fetch rank data from the api
  const fetchRank = async () => {
    try {
      fetch(
        "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setRank(response.data.position);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to fetch Badge data form the apip
  const fetchBadge = async () => {
    try {
      fetch(
        "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setBadge(response.data);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // Call the fetchImage function
    fetchImage();

    // Call the fetchPointandLevel function
    fetchPointandLevel();

    // Call the fetchRank function
    fetchRank();

    // Call the fetchBadge function
    fetchBadge();
  }, []);

  dataArray[0].value = point;
  dataArray[2].value = level;
  dataArray[1].value = rank;

  if (loading) {
    return (
      <h1 className='text-white flex justify-center items-center font-semibold text-3xl'>
        Loading...
      </h1>
    );
  }

  return (
    <div className='bg-white rounded-t-xl max-h-screen h-[80vh]'>
      <div className='flex items-center justify-center'>
        <div className='w-[100px] drop-shadow-xl p-0.5 border rounded-full absolute bg-white'>
          <img src={imageUrl} alt='Profile Picture' />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <p className='font-semibold p-2 mt-14 text-2xl text-[#3f3f3f]'>
          Rich Explorer
        </p>
      </div>
      <div className='flex m-4 justify-between'>
        {dataArray?.map((elem) => (
          <Fragment key={elem.id}>
            <Card elem={elem} />
          </Fragment>
        ))}
      </div>
      <div>
        <Options badge={badge} />
      </div>
    </div>
  );
};

export default Profile;
