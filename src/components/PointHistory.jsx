import React, { useEffect, useState } from "react";

const PointHistory = () => {
  // State to store the Point History data fetched from api
  const [pointHistory, setPointHistory] = useState(null);

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

  const fetchHistoryData = async () => {
    try {
      await fetch(
        "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-history?page=1&limit=20",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setPointHistory(response.data);
          console.log(pointHistory);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  if (!pointHistory) {
    return (
      <h2 className='text-lg text-gray-700 flex items-center justify-center mt-10'>
        Loading...
      </h2>
    );
  }

  return (
    <div className='mt-4 relative overflow-x-auto shadow-md rounded-md sm:rounded-lg border-2 h-[200px] max-h-[350px] overflow-x-scroll'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-scroll'>
        <thead className='text-lg text-gray-700 uppercase dark:text-gray-400'>
          <tr>
            <th className='px-6 py-2 text-white  dark:bg-[#7052ff]'>Title</th>
            <th className='px-6 py-2 text-white  dark:bg-[#7052ff]'>Xp</th>
          </tr>
        </thead>
        <tbody>
          {pointHistory?.map((elem) => (
            <tr
              key={elem.id}
              className='border-b border-gray-200 dark:border-gray-700'>
              <td className='px-6 py-1 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800'>
                {elem.title}
              </td>
              <td className='px-6 py-1'>{elem.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointHistory;
