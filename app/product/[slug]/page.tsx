import { getCategoryProduct, getProduct } from "@/actions/get-spesific-product";

export default async function Page({ params }: { params: { slug: string } }) {
	const products = await getProduct(params);

	const productByCategory = [];

	if (products && products.categoryid) {
		try {
			const productsCategory = await getCategoryProduct(products.categoryid);
			productByCategory.push(...productsCategory);
		} catch (error) {
			console.error("Error fetching category products:", error);
		}
	}

	console.log("categoryid", products.categoryid);

	console.log("productByCategory", productByCategory);

	return <div>My Product: {params.slug}</div>;
}
