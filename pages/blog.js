import { getSession, useSession } from "next-auth/react";

function Blog({ data }) {
  const { data: session } = useSession();
  console.log(session);
  return <h1>Blog page - {data}</h1>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
      data: session ? "blog posts" : "List of free stuff",
    },
  };
}
