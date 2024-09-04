import Card from "@/components/Card/Card";
import { generateFolderName, getData } from "@/helpers/helpers";

async function Blog() {
  const blogs = await getData("blogs");
  return (
    <div className="w-full px-2 grid grid-cols-1 md:grid-cols-2	gap-3">
      {blogs.map((blog) => (
        <Card
          type="blog"
          title={blog.title}
          mediaUrl={blog.mediaUrl}
          excerpt={blog.excerpt}
          key={generateFolderName(blog.title)}
        />
      ))}
    </div>
  );
}

export default Blog;
