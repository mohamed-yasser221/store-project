import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

const Profile = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    const timer = setTimeout(() => {
      setLoad(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return <>{load ? <DotLoader /> : <h1>Hello</h1>}</>;
};

export default Profile;
