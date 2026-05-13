import type { Metadata } from "next";
import Link from "next/link";
import { getServerClient } from "@/lib/supabase/server";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Blog - EthioImports",
  description:
    "Stay updated with the latest car import news, guides, and tips for the Ethiopian market.",
};

export default async function BlogPage() {
  const supabase = getServerClient();

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return (
    <>
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">Blog</h1>
          <p className="mt-4 text-gray-300 max-w-2xl text-lg">
            Insights, guides, and news about car importing in Ethiopia.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!posts || posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No blog posts yet.</p>
              <p className="text-gray-400 text-sm mt-1">Check back soon for new content.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Card key={post.id}>
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      {post.author && <span>By {post.author}</span>}
                      <span>
                        {new Date(post.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      {post.tags && post.tags.length > 0 && (
                        <span className="bg-gold-100 text-gold-700 px-2 py-0.5 rounded-full">
                          {post.tags[0]}
                        </span>
                      )}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl lg:text-2xl font-bold text-navy-900 hover:text-gold-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    {post.excerpt && (
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 mt-4 text-gold-600 hover:text-gold-500 font-semibold text-sm transition-colors"
                    >
                      Read More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
