"use client";

import BlogCard from "./BlogCard";

const blogs = [
  {
    url: "https://medium.com/@dwashkarma/creating-a-react-npm-package-a-step-by-step-guide-with-licensing-considerations-7bdcc1eb1fa0",
  },
  {
    url: "https://medium.com/@dwashkarma/why-every-frontend-developer-should-master-technical-seo-my-journey-insights-d46be40de169",
  },
];

export default function BlogSection() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-3xl font-bold text-textSecondary uppercase text-center ">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
        {blogs.map((blog, index) => (
          <BlogCard key={index} url={blog.url} />
        ))}
      </div>
    </div>
  );
}
