"use client";

import { createContext, useCallback, useEffect, useState } from "react"
import { PostModel } from "../../../core/post/models/post-model";
import useAPI from "../hooks/use-api.hook";

export interface PostsContext {
    posts: PostModel[];
    setPosts: any;
    loadingPosts: boolean;
}

const PostContext = createContext<PostsContext | undefined>(undefined);
export default PostContext;

export function PostProvider({ children }: { children: React.ReactNode }) {
    const { httpGet } = useAPI();

    const [posts, setPosts] = useState<PostModel[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    const fetchPosts = useCallback(async () => {
        const respose = await httpGet("post");

        if (respose.status === 200) {
            setPosts(respose.data);
        }

        setLoadingPosts(false);
    }, []);

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <PostContext.Provider
            value={{
                posts,
                setPosts,
                loadingPosts
            }}
        >
            {children}
        </PostContext.Provider>
    );
}