"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import { PostModel } from "../../../core/post/models/post-model";
import { formatDatetime } from "@/utils/formate-datetime";
import { cn } from "@/utils/cn";

type PostContentProps = {
    post: PostModel;
};

export function PostContent({ post }: PostContentProps) {
    return (
        <article className="container mx-auto px-4 py-12 max-w-3xl">

            {post.coverImageUrl && (
                <div className="mb-8">
                    <Image
                        src={post.coverImageUrl}
                        alt={post.title}
                        width={1200}
                        height={600}
                        className="rounded-2xl w-full h-auto object-cover shadow-lg"
                        priority
                    />
                </div>
            )}

            <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50">
                    {post.title}
                </h1>

                {post.excerpt && (
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                    </p>
                )}

                <div className="mt-6 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="h-8 w-8 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                        {post.author?.[0] ?? "A"}
                    </div>

                    <span>Por {post.author}</span>

                    <span className="text-gray-400">•</span>

                    <time>{formatDatetime(post.createdAt)}</time>
                </div>
            </header>

            <hr className="border-gray-200 dark:border-gray-700 mb-10" />

            <div
                className={cn(
                    "prose prose-slate dark:prose-invert",
                    "prose-lg lg:prose-xl",
                    "max-w-none",
                    "overflow-hidden",
                    "prose-a:transition",
                    "prose-a:no-underline",
                    "prose-a:text-blue-500",
                    "prose-a:hover:text-blue-700",
                    "prose-a:hover:underline",
                    "prose-img:mx-auto"
                )}
            >
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                        rehypeHighlight,
                        rehypeSanitize
                    ]}
                    components={{
                        table: ({ node, ...props }) => {
                            if (!node?.children) return "";

                            return (
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[600px]" {...props} />
                                </div>
                            );
                        },
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 mt-12 mb-8" />

            <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
                Artigo escrito por <strong>{post.author}</strong>
            </footer>
        </article>
    );
}
