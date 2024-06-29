"use server";
import { createClient } from "@/utils/supabase/client";
import { cache } from "react";

const supabase = createClient();

export const getAllLabelled = cache(async () => {
	try {
		const { data: allCategory, error } = await supabase
			.from("product")
			.select(
				`
      *,
      productimage(imageurl),
      productvariation(id, price)
    `,
			)
			.not("label", "is", null);

		if (error?.code) return error;

		return allCategory;
	} catch (error: any) {
		return error;
	}
});

export const getAllHeroImage = cache(async () => {
	try {
		const { data: heroImages, error } = await supabase
			.from("productimage")
			.select(
				`
          imageurl,
          product (
            slug
          )
        `,
			)
			.is("variationcolorid", null);

		if (error?.code) return error;

		return heroImages;
	} catch (error: any) {
		return error;
	}
});

export const getAllCategory = cache(async () => {
	try {
		const { data: allCategory, error } = await supabase
			.from("category")
			.select(`
        *,
        products:product (
          *,
          images:productimage(imageurl),
          variations:productvariation(
            id,
            price
          ),
          category:category(*)
        )
      `);

		if (error?.code) return error;

		return allCategory;
	} catch (error: any) {
		return error;
	}
});
