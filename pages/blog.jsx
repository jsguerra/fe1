import dynamic from "next/dynamic";

const Blog = dynamic(() => import("blog/pages/posts"), { ssr: false });

export default Blog;
