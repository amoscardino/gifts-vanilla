import { useParams } from "react-router-dom";
import GiftForm from "../../components/GiftForm";
import { getGift } from "../../api/giftApi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";

const EditGift = () => {
  const { id } = useParams<{ id: string }>();
  const { data: gift } = useQuery({
    queryKey: ["gift", id],
    queryFn: () => getGift(+id!)
  });

  if (!gift)
    return <Loader />;

  return <GiftForm gift={gift!} />;
};

export default EditGift;
