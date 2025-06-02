import React from 'react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start your journey as a developer.",
    date: "March 15, 2024",
    imageUrl: "/dwas.jpg",
    category: "Development"
  },
  {
    id: 2,
    title: "Modern Design Principles",
    excerpt: "Explore the latest trends and principles in modern web design.",
    date: "March 10, 2024",
    imageUrl: "/dwas.jpg",
    category: "Design"
  },
  {
    id: 3,
    title: "The Future of AI in Tech",
    excerpt: "Discover how artificial intelligence is shaping the future of technology.",
    date: "March 5, 2024",
    imageUrl: "/dwas.jpg",
    category: "Technology"
  }
];

const Blog = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Latest Blog Posts</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore my thoughts, tutorials, and insights about web development, design, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm font-semibold text-blue-600">{post.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog; 