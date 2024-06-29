"use server";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const getProduct = async (params: { slug: string }) => {
	try {
		const { data: spesificProductBySlug, error } = await supabase
			.from("product")
			.select(
				`
        *,
        productvariation (
          *,
          variationcolor (
            *,
            productimage (*)
          )
        ),
        productimage (*),
        productspecification (*),
        productfeature (*)
      `,
			)
			.eq("slug", params.slug)
			.single();

		if (error?.code) return error;

		return spesificProductBySlug;
	} catch (error: any) {
		return error;
	}
};

export const getCategoryProduct = async (categoryId: any) => {
	try {
		const { data: productsByCategory, error } = await supabase
			.from("product")
			.select(
				`
          *,
          productvariation (
            id,
            price
          ),
          productimage (*)
        `,
			)
			.eq("categoryid", categoryId);

		if (productsByCategory) {
			// Sorting variations by price in ascending order on the client side
			productsByCategory.forEach((product) => {
				product.ProductVariation = product.ProductVariation.sort(
					(a: { price: number }, b: { price: number }) => a.price - b.price,
				);
			});
		}

		if (error?.code) return error;

		return productsByCategory;
	} catch (error: any) {
		return error;
	}
};
