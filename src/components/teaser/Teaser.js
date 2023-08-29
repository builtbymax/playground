'use client';

import Link from 'next/link';

export default function Teaser({ slug, title, description, layout }) {

  const Button = ({ title, layout, slug }) => (
    <>
      <Link href={`${slug}`} className={`cta layout-${layout} has-icon`}>
        <span>{title}</span>
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--cta__icon__color)" d="M11.2125 0.798322C10.825 0.404822 10.1918 0.39998 9.79832 0.787506C9.40482 1.17503 9.39998 1.80818 9.78751 2.20168L13.5282 6H1.5C0.947715 6 0.5 6.44772 0.5 7C0.5 7.55228 0.947715 8 1.5 8H13.359L9.82171 11.2652C9.4159 11.6398 9.39059 12.2725 9.7652 12.6783C10.1398 13.0841 10.7725 13.1094 11.1783 12.7348L16.5856 7.74339C16.5966 7.73341 16.6075 7.72314 16.6183 7.71258C16.725 7.60744 16.8032 7.48422 16.8526 7.35262C16.8924 7.24722 16.9148 7.13335 16.9165 7.01445C16.9168 6.98966 16.9163 6.96485 16.9148 6.94008C16.9085 6.83327 16.8854 6.73096 16.8482 6.63576C16.8103 6.5387 16.7565 6.44621 16.6868 6.36216C16.6723 6.34465 16.6572 6.32764 16.6415 6.31117C16.6346 6.30384 16.6275 6.29664 16.6204 6.28957L11.2125 0.798322Z" />
        </svg>
      </Link>
    </>
  );

  return (
    <>
      <div className={`teaser-item layout-${layout}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button title="Show" layout="0" slug={slug} />
      </div>
    </>
  );
};