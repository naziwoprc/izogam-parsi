import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogDetail from "./BlogDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "مقاله یافت نشد" };

  return {
    title: `${post.title} | ایزوگام پارسی`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogDetail post={post} />;
}
