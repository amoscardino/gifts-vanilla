import PersonForm from "../../components/PersonForm";
import PersonDto from "../../api/models/personDto";

const AddPerson = () => {
  const person = {} as PersonDto;

  return (
    <PersonForm person={person} />
  );
};

export default AddPerson;
