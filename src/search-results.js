import {serpstack} from "./api_credentials";
function getResults(){
  const axios = require('axios');
  const params = {
    access_key: serpstack.access_key,
    query: 'abortions'
  }

  var search_string = "http://api.serpstack.com/search?access_key="+params.access_key+"&query="+params.query;

  axios.get(search_string, {params})
    .then(response => {
      const apiResponse = response.data;
      console.log("Total results: ", apiResponse.search_information.total_results);
      apiResponse.organic_results.map((result, number) =>
        console.log(`${number+1}. ${result.title}`));
    }).catch(error => {
      console.log(error);
    });
}

export default getResults;