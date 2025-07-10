import axios from "axios";

export default axios.create({
   baseURL:'https://api.rawg.io/api',
   params:{
    key:'779b2e9b187847248e0c8151662912c0'
   } 
})