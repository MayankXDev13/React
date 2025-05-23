import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  /*     const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/mayankxDev13")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []); */

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github
      <div className="flex justify-around items-center gap-2">
        Username : {data.login}
        <img src={data.avatar_url} alt="" width={300} className="rounded-4xl" />
      </div>
    </div>
  );
}

export default Github;


