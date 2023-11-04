import Image from "next/image";
import { Codystar } from "next/font/google";

const inter = Codystar({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});
function Header() {
  return (
    <header className="app-header">
      <Image src="/logo512.png" alt="React logo" width={140} height={140} />
      <h1 className={inter.className}>The React Quiz</h1>
    </header>
  );
}

export default Header;
