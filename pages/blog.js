function Blog() {
  return <h1>Blog page</h1>;
}

export default Blog;

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       data: session ? "blog posts" : "List of free stuff",
//     },
// };
// }
