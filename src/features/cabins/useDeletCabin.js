import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeletCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            }),
                toast.success("cabin successfully deleted");
        },
        onError: (error) => toast.error(error.message),
    });

    return { isDeleting, deleteCabin }
}

