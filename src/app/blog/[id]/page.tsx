

import { Metadata } from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next: {
            revalidate: 60,
        }
    }
    );
    return response.json();
}

type PostProps = {
    params: {
        id: string,
    },
}

export async function generateMetadata({ params }: PostProps) :Promise<Metadata> {
    const {id} = await params;
    const post = await getData(id);
    return {
        title: post.title,
    }
}
export default async function Post({ params }: PostProps) {
    const {id} = await params;
    const post = await getData(id);
    return (
      <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      </>
    );
  }
  