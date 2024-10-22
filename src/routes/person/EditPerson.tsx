import { useParams } from "react-router-dom";
import PersonForm from "../../components/PersonForm";
import { getPerson } from "../../api/personApi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";

const EditPerson = () => {
  const { id } = useParams<{ id: string }>();
  const { data: person } = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPerson(+id!)
  });

  if (!person)
    return (<Loader />);

  return (
    <PersonForm person={person!} />
  );
};

export default EditPerson;
