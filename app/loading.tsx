"use client";
import { useEffect, useState } from "react";

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return <LoadingSkeleton />;
	// return "Loading...";
}

const LoadingSkeleton = () => {
	return (
		<div>
			<div className="w-full flex min-h-[70svh] animate-pulse bg-gray-600/10" />
		</div>
	);
};
