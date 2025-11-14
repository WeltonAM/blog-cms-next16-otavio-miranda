import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { PostModel } from "../../../core/post/models/post-model";
import { formatDatetime, formatDistanceToNow } from "@/utils/formate-datetime";

export interface PostCardProps {
    post: PostModel;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <section
            className={cn(
                "gap-4 mb-10 group",
                "grid grid-cols-1",
                "sm:grid-cols-2",
            )}
        >
            <Link
                href="#"
                className="w-full h-full overflow-hidden rounded-xl"
            >
                <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                    width={1200}
                    height={720}
                    priority
                />
            </Link>

            <div
                className={cn(
                    "flex flex-col justify-center gap-4",
                )}
            >
                <time
                    className={cn(
                        "text-xs/tight",
                        "text-slate-600",
                        "dark:text-slate-400",
                    )}
                    dateTime={post.createdAt}
                    title={formatDistanceToNow(post.createdAt)}
                >
                    {formatDatetime(post.createdAt)}
                </time>

                <Link
                    href="#"
                >
                    <h1
                        className={cn(
                            "text-xl/tight",
                            "font-bold",
                            "group-hover:text-slate-800",
                            "dark:group-hover:text-slate-400",
                            "text-slate-900",
                            "dark:text-slate-300",
                        )}
                    >
                        {post.title}
                    </h1>
                </Link>

                <p
                    className={cn(
                        "text-sm/tight",
                        "text-slate-700",
                        "dark:text-slate-400",
                    )}
                >
                    {post.excerpt}
                </p>
            </div>
        </section>
    );
}