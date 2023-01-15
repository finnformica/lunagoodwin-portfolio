import Link from "next/link";
import { useRouter } from "next/router";

import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
          // className="bg-red-500 grow"
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
