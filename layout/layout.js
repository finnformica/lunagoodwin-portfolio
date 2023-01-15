import Link from "next/link";
import { useRouter } from "next/router";

import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
};

export default Layout;
