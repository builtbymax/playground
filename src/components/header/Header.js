import HeaderAnimation from './HeaderAnimation';
import Headline from "@/components/headline-container/HeadlineContainer";
import Section from "@/layouts/Section";
import Image from 'next/image';

export default function Header({ logo, title, size }) {
  return (
    <header className={`header size-${size} has-animation`}>
      <Section spacingBottom={true} spacingTop={false}> 
        <Headline headline={title} subline="Kobys world" tag="h1" />
      </Section>
      <Section spacingBottom={false} spacingTop={false}>
        <HeaderAnimation logo={logo} />
      </Section>
    </header>
  );
};

/*
  '.has-background-image'
  <div className="background-image">
    <Image src="/background-pattern.jpg" alt="Header background image" width="1920" height="1080" objectFit="cover" quality={100} />
  </div>
*/