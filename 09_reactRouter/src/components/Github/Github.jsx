import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Github() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [username]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center h-auto m-4 p-3 bg-slate-800 text-white font-bold text-lg items-center">
      Github Followers : {data.bio}
      <img
        src={data.avatar_url}
        alt="User Image"
        className="size-60 rounded-lg hover:scale-110 transition duration-300 mx-auto my-10"
      />
    </div>
  );
}
