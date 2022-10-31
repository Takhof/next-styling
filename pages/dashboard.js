import { useSession, getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [signedin, setSignedin] = useState(false);

  useEffect(() => {
    const waitSession = async () => {
      const userData = await getSession();
      if (!userData) {
        signIn();
      } else {
        setSignedin(true);
      }
    };
    waitSession();
  }, []);

  return (
    <>
      {!signedin && <h2>Loading...</h2>}

      <h1>Dashboard page</h1>
    </>
  );
}

export default Dashboard;
