import { useContext } from "react";
import PostContext from "../contexts/posts.contect";

export function usePosts() {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error(
      "The hook `usePosts` must be used inside the `PostsProvider`"
    );
  }

  return context;
}
