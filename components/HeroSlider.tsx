"use client";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

interface HeroSliders {
	loop_status: boolean;
	hero_data: any[];
	position_hero: string;
}

function HeroSlider({ loop_status, hero_data, position_hero }: HeroSliders) {
	const hero_Detail = hero_data[0];
	const [sliderRef, instanceRef] = useKeenSlider(
		{
			// slideChanged() {
			//   console.log("slide changed");
			// },
			loop: loop_status,
		},
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 2000);
				}
				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			},
		],
	);
	return (
		<section ref={sliderRef} className="keen-slider">
			{position_hero === "product_detail" && (
				<div className="keen-slider__slide">
					<div className="w-full min-h-screen">
						<Image
							// loader={} // https://docs.imagekit.io/getting-started/quickstart-guides/nextjs
							src={hero_Detail.imageurl}
							alt={`Banner ${hero_Detail.product.slug}`}
							className="w-full min-h-[50vh]"
							layout="fill"
							objectFit="cover"
							priority={true}
						/>
					</div>
				</div>
			)}

			{position_hero !== "product_detail" &&
				hero_data.map(
					(
						item: { imageurl: string; product: { slug: any } },
						index: React.Key,
					) => (
						<div key={index} className="keen-slider__slide">
							<a
								href={`/product/${item.product.slug}`}
								target="_blank"
								rel="noreferrer"
							>
								<div className="w-full min-h-screen">
									<Image
										// loader={} // https://docs.imagekit.io/getting-started/quickstart-guides/nextjs
										src={item.imageurl}
										alt={`Banner ${item.product.slug}`}
										className="w-full min-h-[50vh]"
										layout="fill"
										objectFit="cover"
										priority={true}
									/>
								</div>
							</a>
						</div>
					),
				)}
		</section>
	);
}

export default HeroSlider;
