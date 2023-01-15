import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full border-b border-white/10">
      <div className="flex p-8 md:w-2/3 w-1/2 box-border items-center border-r border-white/10">
        <h1 className="text-3xl">luna ocean</h1>
      </div>

      <div className="flex md:w-1/3 w-1/2 justify-center items-center gap-10 md:gap-14 xl:gap-36">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: router.route === "/" ? "white" : "#9e9e9e",
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            color: router.route === "/" ? "#9e9e9e" : "white",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
