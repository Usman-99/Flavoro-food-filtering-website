import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
          <button
            className="ml-16 p-4 text-center bg-black text-xl text-white mt-10 rounded-lg border-red-500"
            onClick={() => navigate("/")}
          >
            <span className="mr-2 text-2xl">&#8617;</span> Back to shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
