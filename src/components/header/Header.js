import HeaderAnimation from './HeaderAnimation';
import Headline from "@/components/headline-container/HeadlineContainer";
import Section from "@/layouts/Section";

export default function Header({ logo, title, size }) {
  return (
    <header className={`header size-${size}`}>
      <Section spacingBottom={true} spacingTop={false}> 
        <Headline headline={title} subline="Kobys world" tag="h1" />
      </Section>
      <Section spacingBottom={false} spacingTop={false}>
        <HeaderAnimation logo={logo} />
      </Section>
    </header>
  );
};