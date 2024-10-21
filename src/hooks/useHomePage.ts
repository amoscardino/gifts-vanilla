import { useQuery } from "@tanstack/react-query";
import { getGifts } from "../api/giftApi";
import { getPeople } from "../api/personApi";
import PersonDto from "../api/models/personDto";
import GiftDto from "../api/models/giftDto";

interface UseHomePageResult {
  people: PersonDto[];
  gifts: GiftDto[];
  isLoading: boolean;
}

const useHomePage = (): UseHomePageResult => {
  const {
    data: people,
    isLoading: peopleLoading
  } = useQuery({
    queryKey: ["person"],
    queryFn: getPeople
  });
  const {
    data: gifts,
    isLoading: giftsLoading
  } = useQuery({
    queryKey: ["gift"],
    queryFn: getGifts
  });

  return {
    people: people || [],
    gifts: gifts || [],
    isLoading: peopleLoading || giftsLoading
  };
};

export { useHomePage };