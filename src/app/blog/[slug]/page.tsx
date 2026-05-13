import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServerClient } from "@/lib/supabase/server";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supabase = getServerClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) return { title: "Post Not Found - EthioImports" };

  return {
    title: `${post.title} - EthioImports Blog`,
    description: post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = getServerClient();

  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) notFound();

  return (
    <>
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button href="/blog" variant="ghost" size="sm">
            &larr; Back to Blog
          </Button>
          <div className="mt-6">
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
              {post.author && <span>By {post.author}</span>}
              <span>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-3 text-gray-300 text-lg">{post.excerpt}</p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-gray max-w-none">
            {(post.content || "").split("\n").map((line: string, i: number) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={i} className="text-3xl font-bold text-navy-900 mt-8 mb-4">
                    {line.replace("# ", "")}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-navy-900 mt-8 mb-3">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-navy-900 mt-6 mb-2">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-gray-600 ml-4 list-disc">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <div key={i} className="h-4" />;
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </article>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Ready to Import Your Dream Car?
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Get a free, no-obligation quote from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button href="/inventory" variant="outline" size="lg">
                Browse Inventory
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
