"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addFlashSale = async (flashData: any) => {
  const token = (await cookies()).get("accessToken")!.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flashData),
    });
    revalidateTag("PRODUCT");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getFlashSaleProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
      next: {
        tags: ["PRODUCT"],
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
