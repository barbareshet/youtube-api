import axios from "axios";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtybe/v3',

    params:{
        part: "snippet",
        maxResults:5,
        key:'AIzaSyAa2Rc6nUcGJYTt38-3ngOifVA2xuF0q3Q'
    }
})