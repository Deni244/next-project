
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog | My Project",
    description: "About company",
  };

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next: {
            revalidate: 60,
        }
    }
    );
    if(!response.ok) throw new Error('Unable to fetch posts')
    return response.json();
}
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export default async function Blog() {
    const posts = await getData();
    return (
      <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post: Post) => (
            <li key={post.id}>
                <Link href={`/blog/${post.id}`} >{post.title}</Link>
            </li>
        ))}
      </ul>
      </>
    );
  }
  