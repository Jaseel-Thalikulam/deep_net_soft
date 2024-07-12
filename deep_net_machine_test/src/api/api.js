import axios from "axios";
import { secrets } from "../constants/constants";


   export const getDrinksData = async () => {
     try {
       console.log(secrets);
       const { data } = await axios.get(`${secrets.serverUrl}get-all-items`);
       console.log(data);
       return data;
     } catch (err) {
       console.log(err);
     }
   };