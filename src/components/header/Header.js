import HeaderAnimation from './HeaderAnimation';
import Section from "@/layouts/Section";
import { Headline, Subline } from "@/components/UI/Headline";
import { Button, ButtonContainer } from '@/components/UI/Button';

export default function Header({ logo, title, size }) {
  return (
    <header className={`header size-${size} has-animation`}>
      <Section spacingBottom={true} spacingTop={false}> 
        <Headline as="h1">{title}</Headline>
        <Subline>This is a playground for koby.</Subline>
        <ButtonContainer alignment="left">
          <Button href="/">Button</Button>
        </ButtonContainer>
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