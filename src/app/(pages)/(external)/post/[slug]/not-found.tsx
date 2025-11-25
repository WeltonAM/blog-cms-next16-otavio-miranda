import Link from "next/link";

export default function PostNotFound() {
    return (
        <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    Post not found
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                    The post you are looking for does not exist.
                </p>

                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>

                        Go back to the blog
                    </Link>
                </div>
            </div>
        </div>
    );
}