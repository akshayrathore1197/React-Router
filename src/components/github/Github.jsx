import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
const data = useLoaderData()

//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/akshayrathore1197")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setdata(data);
//       });
//   }, []);

  return (
    <div className=" text-center m-4 bg-gray-600 text-wrap p-4 text-3xl">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  );
}

export default Github;


export const githubInfoLoader = async()=>{
    const response = await fetch("https://api.github.com/users/akshayrathore1197")
    const data = await response.json()
    return data
    return response.json()
}
