import { Link } from "react-router-dom";
import GrandTotal from "../components/GrandTotal";
import PersonCard from "../components/PersonCard";
import Loader from "../components/Loader";
import { useHomePage } from "../hooks/useHomePage";

const Home = () => {
  const { people, gifts, isLoading } = useHomePage();

  if (isLoading)
    return <Loader />;

  const totalAmount = gifts.reduce((total, gift) => total + (gift.price || 0), 0);

  return (
    <div className="vstack gap-3">
      <div className="hstack justify-content-end">
        <Link to="/person" className="btn btn-outline-primary btn-sm">
          Add Person
        </Link>
      </div>

      {people.map(person => {
        const personGifts = gifts.filter(gift => gift.person.id === person.id);

        return (
          <PersonCard key={person.id} person={person} gifts={personGifts} />
        );
      })}

      <GrandTotal amount={totalAmount} />
    </div>
  );
};

export default Home;
