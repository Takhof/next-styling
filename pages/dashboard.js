import { useEffect } from "react";

function Dashboard() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      signIn();
    }
  });

  return (
    <>
      {!session && <h2>Loading... </h2>}

      <h1>Dashboard page</h1>
    </>
  );
}

export default Dashboard;
