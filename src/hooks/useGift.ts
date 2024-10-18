import { useNavigate } from "react-router-dom";
import GiftDto from "../api/models/giftDto";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGift, deleteGift, updateGift } from "../api/giftApi";

const useGift = (gift: GiftDto) => {
  const isNew = !gift.id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['gift'] });
    navigate('/');
  };

  const saveMutation = useMutation({ mutationFn: isNew ? createGift : updateGift });
  const deleteMutation = useMutation({ mutationFn: deleteGift });

  const onSubmit = async (data: GiftDto) => {
    if (isNew)
      data.id = 0;

    await saveMutation.mutateAsync(data, { onSuccess });
  };

  const onDelete = async () => {
    await deleteMutation.mutateAsync(gift.id, { onSuccess });
  };

  return { onSubmit, onDelete };
};

export { useGift };
