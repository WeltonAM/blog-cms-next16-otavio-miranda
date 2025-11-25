"use client";

export default function PostLoading() {
    return (
        <div className="container mx-auto py-10 animate-pulse">
            {/* Header image */}
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700/70 rounded-2xl mb-8" />

            {/* Title */}
            <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700/70 rounded-md mb-6" />

            {/* Meta info */}
            <div className="flex gap-4 mb-8">
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700/70 rounded-md" />
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700/70 rounded-md" />
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700/70 rounded-md" />
            </div>

            {/* Content skeleton */}
            <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700/70 rounded-md" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700/70 rounded-md" />
                <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700/70 rounded-md" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700/70 rounded-md" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700/70 rounded-md" />
            </div>

            {/* Another section */}
            <div className="mt-10 space-y-4">
                <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700/70 rounded-md" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700/70 rounded-md" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700/70 rounded-md" />
            </div>
        </div>
    );
}
