import { Currency } from "@models/currency";
import { MarketData } from "@models/market-data";
import { axiosInstance } from "@services/axios";

async function fetchCurrency(): Promise<Currency[]> {
    try{
      const response = await axiosInstance.get("/currency");

      return response.data;

    } catch(e) {
        console.log(e)
        console.debug(e);
        return [];
    }
}

async function fetchMarketData(): Promise<MarketData[]> {
    try{
        const response = await axiosInstance.get("/market", {
            params: {
                username:"user26614",
            }
        });

        return response.data;

      } catch(e) {
          console.debug(e);
          return [];
      }
}

export {
    fetchCurrency,
    fetchMarketData
}
