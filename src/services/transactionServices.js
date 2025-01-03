import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../utls/urls";

const fetchTransaction = async () => {

const response = await axios.post(`${BASE_URL}/transaction/transaction`);
  return response.data;
};


export const useTransaction = () => {

 useQuery({

queryKey: ["transaction"],
    queryFn: fetchTransaction,
  });

};