import GiftForm from "../../components/GiftForm";
import GiftDto from "../../api/models/giftDto";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../../api/personApi";
import Loader from "../../components/Loader";

const AddGift = () => {
  const [searchParams] = useSearchParams();
  const personId = +searchParams.get("personId")!;
  const { data: person } = useQuery({
    queryKey: ["person", personId],
    queryFn: () => getPerson(personId),
  });

  if (!person)
    return <Loader />;

  return <GiftForm gift={{ person } as GiftDto} />;
};

export default AddGift;
