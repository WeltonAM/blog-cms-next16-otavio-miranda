import { postRepository } from "../../../backend/repositories/json-post-repository";
import { PostCard } from "./PostCard";

export default async function PostCardList() {
    const posts = await postRepository.findAll();

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
