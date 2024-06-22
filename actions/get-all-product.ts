"use server"
import { createClient } from "@/utils/supabase/client";

export const getAllProduct = async () => {
  const supabase = createClient();
  try {
    // const { data, error } = await supabase.from("Product").select("*");
    const { data, error } = await supabase.from('Category').select('id')
    if (error?.code) return error;
    return data;
  } catch (error: any) {
    return error;
  }
};
