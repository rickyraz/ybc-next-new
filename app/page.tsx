import {
	getAllCategory,
	getAllHeroImage,
	getAllLabelled,
} from "@/actions/get-landing";
import HeroSlider from "@/components/HeroSlider";
import ProductSlider from "@/components/ProductSlider";
import ProductFilter from "@/components/landing/ProductFilter";
import Welcome from "@/components/landing/Welcome";

export default async function Index() {
	const allProductLabelled = getAllLabelled();
	const allHeroImage = getAllHeroImage();
	const AllCategoryWithProduct = getAllCategory();
	const [labeled, hero, category] = await Promise.all([
		allProductLabelled,
		allHeroImage,
		AllCategoryWithProduct,
	]);

	const sortedCategory = category?.map((category: { products: any[] }) => {
		const sortedProducts = category.products.map((product) => {
			return {
				...product,
				variations: product.variations.sort(
					(a: { price: number }, b: { price: number }) => a.price - b.price,
				),
			};
		});

		return {
			...category,
			products: sortedProducts,
		};
	});

	console.log("labeled", labeled);
	console.log("hero", hero);
	console.log("sortedCategory", sortedCategory);

	return (
		<div>
			<HeroSlider
				hero_data={hero}
				loop_status={true}
				position_hero={"landing_page"}
			/>
			<ProductSlider
				title={"PRODUK TERLARIS"}
				per_view_desk={4}
				product_spesific_data={labeled}
			/>
			<Welcome />
			<ProductFilter categories={sortedCategory} />
		</div>
	);
}
