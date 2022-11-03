import React, { useState, createContext } from "react";

const RemsAgentContext = createContext();
const REMS_URL = "https://rems.mrteey.com";

export const RemsAgentProvider = ({ children }) => {
  const [getAgent, setGetAgent] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  const [httpSuccess, setHttpSuccess] = useState("");

  const fetchAgent = async () => {
    const result = await fetch(`${REMS_URL}/agents`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njc0OTE3MjYsImlhdCI6MTY2NzQzMTAwNiwic3ViIjoxLCJyb2xlIjoiYWRtaW4ifQ.N8KoXd6ERRisXSnZYkhwfOvjTzBEwgqnoxOy_Qo6KH4",
      },
    });
    if (!result.ok) {
      throw new Error("Something went wrong!");
    }
    const fetchResponse = await result.json();
    setGetAgent(fetchResponse);
    // console.log(jsonResult);
  };
  fetch().catch((err) => {
    setHttpError(err.message);
  });

  const addAgent = async (formData) => {
    const result = await fetch(`${REMS_URL}/agent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njc0OTE3MjYsImlhdCI6MTY2NzQ1NTExNywic3ViIjoxLCJyb2xlIjoiYWRtaW4ifQ.IGiFxnYeoXqHHg-Xwpb-zLGMMupAu4meQLCjgONz2xM",
      },
      body: JSON.stringify(formData),
    });
    if (result.ok) {
      setHttpSuccess("Agent Created Successfully");
    }
    const addResponse = await result.json();
    console.log(addResponse);
    return {
      addResponse,
    };
  };

  return (
    <RemsAgentContext.Provider
      value={{ getAgent, fetchAgent, addAgent, httpError, httpSuccess }}>
      {children}
    </RemsAgentContext.Provider>
  );
};

export default RemsAgentContext;

// const result = await fetch(`${REMS_URL}/agents/%7B%7B${id}%7D%7D`);
