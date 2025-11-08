import BlogPage from "@/components/template/BlogPage";

export default function ExternalLayout({ children }: { children: React.ReactNode }) {
    return (
        <BlogPage>
            {children}
        </BlogPage>
    );
}