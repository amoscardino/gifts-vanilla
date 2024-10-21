import { useQuery } from "@tanstack/react-query";
import { getPeople } from "../api/personApi";
import { getGifts } from "../api/giftApi";
import { Link } from "react-router-dom";
import GrandTotal from "../components/GrandTotal";
import PersonCard from "../components/PersonCard";
import Loader from "../components/Loader";

const Home = () => {
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

  if (peopleLoading || giftsLoading)
    return <Loader />;

  const totalAmount = (gifts || []).reduce((total, gift) => total + (gift.price || 0), 0);

  return (
    <div className="vstack gap-3">
      <div className="hstack justify-content-end">
        <Link to="/person" className="btn btn-outline-primary btn-sm">
          Add Person
        </Link>
      </div>

      {(people || []).map(person => {
        const personGifts = (gifts || []).filter(gift => gift.person.id === person.id);

        return (
          <PersonCard key={person.id} person={person} gifts={personGifts} />
        );
      })}

      <GrandTotal amount={totalAmount} />
    </div>
  );
};

export default Home;
