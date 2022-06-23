import axios from "axios";

const options = (category) => {
  return{
  method: 'GET',
  url: `https://current-news.p.rapidapi.com/news/${category}`,
  headers: {
    'X-RapidAPI-Key': '6db746e077msh0a1609870030b0fp115007jsn62452d24cc95',
    'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
  }
}
};

export const getNewsData = async(category) => {
    try{
        const response = await axios.request(options(category));
        const {data} = response;
        return data;
    }
    catch(e){
        console.log(e);
    }
}