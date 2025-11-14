"use client";

import { usePosts } from "@/data/hooks/use-posts.hook";
import { PostCard } from "./PostCard";
import LoadingComponent from "../shared/LoadingComponent";

export default function PostCardList() {
    const { posts, loadingPosts } = usePosts();

    if (loadingPosts) {
        return <LoadingComponent />;
    }

    if (posts.length === 0) {
        return <div>No posts found</div>;
    }

    const [featuredPost, ...otherPosts] = posts;

    return (
        <>
            <PostCard post={featuredPost} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {otherPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}
