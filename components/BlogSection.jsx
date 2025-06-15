"use client";

import BlogCard from "./BlogCard";

const blogs = [
  {
    url: "https://medium.com/@dwashkarma/creating-a-react-npm-package-a-step-by-step-guide-with-licensing-considerations-7bdcc1eb1fa0",
  },
  {
    url: "https://medium.com/@dwashkarma/why-every-frontend-developer-should-master-technical-seo-my-journey-insights-d46be40de169",
  },
  {
    url: "https://medium.com/@dwashkarma/how-to-advance-technical-seo-as-a-developer-2d478bd5654d?source=friends_link&sk=8c10dfd66fac1ced52f3b0801c2bf2f3",
  },
];

export default function BlogSection() {
  return (
    <div className="flex flex-col gap-10" id="blogs">
      <h2 className="text-3xl font-bold text-textSecondary uppercase text-center ">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8 ">
        {blogs.map((blog, index) => (
          <BlogCard key={index} url={blog.url} />
        ))}
      </div>
    </div>
  );
}
