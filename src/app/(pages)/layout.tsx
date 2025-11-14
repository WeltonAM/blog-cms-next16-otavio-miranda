import BlogPage from "@/components/template/BlogPage";
import { PostProvider } from "@/data/contexts/posts.contect";

export default function ExternalLayout({ children }: { children: React.ReactNode }) {
    return (
        <PostProvider>
            <BlogPage>
                {children}
            </BlogPage>
        </PostProvider>
    );
}