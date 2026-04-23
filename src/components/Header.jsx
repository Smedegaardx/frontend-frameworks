import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="bg-[#EEF0EB] border-b border-[#153243]">
        <ul className="flex items-center gap-10 p-4">
          <li>
            <a href="/">
              <Image
                src="/simpelshop.png"
                width={150}
                height={100}
                alt="Logo"
              />
            </a>
          </li>
          <li className="hover:underline hover:decoration-solid hover:underline-offset-4">
            <a href="/products">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
