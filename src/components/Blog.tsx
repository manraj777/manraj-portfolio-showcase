
import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Code2, Users } from 'lucide-react';

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable WebSocket Architecture for Real-time Chess",
    excerpt: "Deep dive into implementing efficient WebSocket connections for multiplayer games, handling state synchronization, and managing connection pools.",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "Web Development",
    slug: "websocket-chess-architecture",
    featured: true,
  },
  {
    title: "Community Building in Tech: Lessons from SDC",
    excerpt: "How we grew our student development community to 300+ members and organized 12+ successful events. Key strategies and challenges faced.",
    date: "2024-10-28",
    readTime: "6 min read",
    category: "Community",
    slug: "tech-community-building",
    featured: true,
  },
  {
    title: "TypeScript Best Practices for Trading Bots",
    excerpt: "Essential patterns and practices for building reliable automated trading systems with TypeScript, including error handling and type safety.",
    date: "2024-10-10",
    readTime: "10 min read",
    category: "TypeScript",
    slug: "typescript-trading-bots",
  },
  {
    title: "Disaster Response Tech: Building PralayMitra",
    excerpt: "Technical challenges and solutions in building a disaster alerting platform with weather APIs and chatbot integration for emergency response.",
    date: "2024-09-22",
    readTime: "7 min read",
    category: "Social Impact",
    slug: "disaster-response-tech",
  },
];

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return <Code2 size={14} />;
      case 'Community':
        return <Users size={14} />;
      case 'TypeScript':
        return <Code2 size={14} />;
      case 'Social Impact':
        return <BookOpen size={14} />;
      default:
        return <BookOpen size={14} />;
    }
  };

  return (
    <section id="blog" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 h-72 w-72 bg-accent/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 right-0 h-72 w-72 bg-accent/5 rounded-full blur-[120px] animate-float animation-delay-2000" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Latest <span className="gradient-text">Articles</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights about development, community building, and technology. 
            Documenting my journey and learnings along the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className={`glass-card p-6 rounded-xl card-hover group cursor-pointer relative ${
                post.featured ? 'ring-2 ring-accent/20' : ''
              }`}
            >
              {post.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full">
                  {getCategoryIcon(post.category)}
                  <span className="text-accent text-sm font-medium">{post.category}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-accent group-hover:translate-x-1 transition-transform">
                  <span className="font-medium">Read More</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            <BookOpen size={16} className="group-hover:rotate-12 transition-transform" />
            <span>View All Articles</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
