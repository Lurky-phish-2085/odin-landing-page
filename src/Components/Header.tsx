import { AnchorHTMLAttributes } from "react";

function Header() {
  return (
    <header className="flex justify-between pt-2 px-52 bg-blue-950">
      <HeaderLogo />
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link>Link #1</Link>
          </li>
          <li>
            <Link>Link #2</Link>
          </li>
          <li>
            <Link>Link #3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function HeaderLogo() {
  return <h1 className="text-2xl font-bold text-white">Header Logo</h1>;
}

function Link({
  children,
  href = "",
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="text-lg text-slate-200" href={href}>
      {children}
    </a>
  );
}

export default Header;
