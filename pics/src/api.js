import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID cJxXBEvfSYpegeq2LEzb4qntic29r-TNYfrniFMxnZo",
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
