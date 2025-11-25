import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cache, Suspense } from "react";
import { PostContent } from "@/components/posts/PostContent";
import { postRepository } from "../../../../../../backend/repositories/json-post-repository";
import PostLoading from "@/components/posts/PostLoading";

type PageProps = {
    params: Promise<{ slug: string }>;
};

const getPost = cache(async (slug: string) => {
    try {
        return await postRepository.findBySlug(slug);
    } catch (error) {
        console.error(`Error fetching post with slug "${slug}":`, error);
        return null;
    }
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: "Post não encontrado",
            description: "O conteúdo solicitado não está disponível",
        };
    }

    return {
        title: post.title,
        description: post.excerpt || `Leia mais sobre ${post.title}`,
        openGraph: {
            title: post.title,
            description: post.excerpt || `Leia mais sobre ${post.title}`,
            type: "article",
            publishedTime: post.createdAt,
            authors: post.author ? [post.author] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt || `Leia mais sobre ${post.title}`,
        },
    };
}

async function PostLoader({ slug }: { slug: string }) {
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return <PostContent post={post} />;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

    return (
        <Suspense fallback={<PostLoading />}>
            <PostLoader slug={slug} />
        </Suspense>
    );
}