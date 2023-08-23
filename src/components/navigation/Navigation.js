import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="content-size-sl">
      <nav className="navigation-container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/playground-logo-black.svg"
              alt="Playground Logo"
              width={200}
              height={200}
              priority
            />
          </Link>
        </div>
        <ul className="navigation-list">
          <li className="navigation-list-item">
            <Link href="/">
              Elements
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};