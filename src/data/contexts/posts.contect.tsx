"use client";

import { createContext, useCallback, useEffect, useState } from "react"
import { PostModel } from "../../../core/post/models/post-model";
import useAPI from "../hooks/use-api.hook";

export interface PostsContext {
    posts: PostModel[];
    setPosts: any;
    loadingPosts: boolean;
    getPostBySlug: (slug: string) => Promise<PostModel | null>;
}

const PostContext = createContext<PostsContext | undefined>(undefined);
export default PostContext;

export function PostProvider({ children }: { children: React.ReactNode }) {
    const { httpGet } = useAPI();

    const [posts, setPosts] = useState<PostModel[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    // const sortByDate = (a: PostModel, b: PostModel) => {
    //     return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    // };
    // posts.sort(sortByDate);

    const fetchPosts = useCallback(async () => {
        const respose = await httpGet("post");

        if (respose.status === 200) {
            setPosts(respose.data);
        }

        setLoadingPosts(false);
    }, []);

    const getPostBySlug = useCallback(async (slug: string) => {
        const response = await httpGet(`post/slug/${slug}`);
        if (response.status === 200) {
            return response.data;
        }
        return null;
    }, []);

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <PostContext.Provider
            value={{
                posts,
                setPosts,
                loadingPosts,
                getPostBySlug,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}