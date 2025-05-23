import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { addFlashSale } from "@/services/flashSale.ts";
import { toast } from "sonner";

interface discountProps {
  selectedIds: string[];
}
const DiscountModal = ({ selectedIds }: discountProps) => {
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form || {};

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const modifiedData = {
      products: [...selectedIds],
      discountPercentage: parseFloat(data?.discountPercentage),
    };
    console.log(modifiedData);
    try {
      const res = await addFlashSale(modifiedData);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={!selectedIds?.length} size="sm">
          Add flash Sale
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Discount Product Brand</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="flex items-center gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="discountPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      className="rounded-sm w-64"
                      placeholder="discountPercentage"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full rounded-sm">
              {isSubmitting ? "Adding...." : "Add"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountModal;
