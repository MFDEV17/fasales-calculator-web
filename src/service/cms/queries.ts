import { Category } from "../../types/type.category.ts";
import { Currency } from "../../types/type.currency.ts";
import { Country } from "../../types/type.country.ts";
import { DeliveryMethod } from "../../types/type.delivery-method.ts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GET_CARDS_PAGE_DATA =
  "https://nulnzk4a.api.sanity.io/v2022-03-07/data/query/production?query=%7B%22categories%22%3A+*%5B_type+%3D%3D+%27category%27%5D%7B_id%2C+designWeight%2C+%22image%22%3A+image.asset-%3Eurl%2C+name%2C+mutableWeight%2C+singleName%7D%2C+%22currencies%22%3A+*%5B_type+%3D%3D+%27currency%27%5D%7B_id%2C+currencyCode%2C+currencyName%7D%2C+%22incrementRate%22%3A+*%5B_type+%3D%3D+%22incrementRate%22%5D%5B0%5D%7BcurrentIncrementRate%7D%2C+%22redemptionFee%22%3A+*%5B_type+%3D%3D+%27redemptionFee%27%5D%5B0%5D%7Bfee%7D%2C+%22managerLink%22%3A+*%5B_type+%3D%3D+%27managerLink%27%5D%5B0%5D%7BmanagerLink%7D%2C+%22countries%22%3A+*%5B_type+%3D%3D+%27deliveryCountry%27%5D%7B_id%2C+countryCode%2C+countryName%7D%2C+%22shops%22%3A+*%5B_type+%3D%3D+%27shop%27%5D%7B_id%2C+shopName%2C+deliveryPrice%2C+shopUrl%2C+specialCommission%2C+specialCommissionActive%7D%2C+%22deliveryMethods%22%3A+*%5B_type+%3D%3D+%27deliveryMethod%27%5D%7B_id%2C+methodName%2C+deliveryPriceRange%5B%5D%7Bcommission%2C+from%2C+to%7D%7D%7D%0A";

const GET_CATEGORIES =
  "https://nulnzk4a.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27category%27%5D%7B_id%2C+designWeight%2C+%22image%22%3A+image.asset-%3Eurl%2C+name%2C+mutableWeight%2C+singleName%7D";

interface AppData {
  currencies: Currency[];
  countries: Country[];
  deliveryMethods: DeliveryMethod[];
}

const getCardsPageData = async () => {
  return await axios
    .get<{ result: AppData }>(GET_CARDS_PAGE_DATA)
    .then((d) => d.data["result"]);
};

const getCategories = async () => {
  return await axios
    .get<{ result: Category[] }>(GET_CATEGORIES)
    .then((d) => d.data["result"]);
};

export const useAppData = () => {
  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["appData"],
    queryFn: getCardsPageData,
  });

  return {
    isLoading,
    isError,
    isSuccess,
    data,
  };
};

export const useCategoryData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return {
    isLoading,
    categories: data,
  };
};
