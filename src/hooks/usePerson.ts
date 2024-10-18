import { useNavigate } from "react-router-dom";
import PersonDto from "../api/models/personDto";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPerson, deletePerson, updatePerson } from "../api/personApi";

const usePerson = (person: PersonDto) => {
  const isNew = !person.id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['person'] });
    navigate('/');
  };

  const saveMutation = useMutation({ mutationFn: isNew ? createPerson : updatePerson });
  const deleteMutation = useMutation({ mutationFn: deletePerson });

  const onSubmit = async (data: PersonDto) => {
    if (isNew)
      data.id = 0;

    await saveMutation.mutateAsync(data, { onSuccess });
  };

  const onDelete = async () => {
    await deleteMutation.mutateAsync(person.id, { onSuccess });
  };

  return { onSubmit, onDelete };
};

export { usePerson };
