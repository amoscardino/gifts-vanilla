import PersonForm from "../../components/PersonForm";
import PersonDto from "../../api/models/personDto";

const AddPerson = () => {
  return <PersonForm person={{} as PersonDto} />;
};

export default AddPerson;
