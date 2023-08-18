import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="content-size-sl">
        <div className="logo">
          <Link href="/">
            <Image
              src="/playground-logo-color.svg"
              alt="Playground Logo"
              width={200}
              height={200}
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};