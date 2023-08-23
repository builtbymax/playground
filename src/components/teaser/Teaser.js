import Link from 'next/link';

export default function Teaser({ slug, title, description }) {
  return (
    <div className="teaser-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`${slug}`} className="cta layout-1">More</Link>
    </div>
  );
};