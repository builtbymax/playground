import Element from "@/layouts/Element";
import { WaveSection } from "./(components)/WaveSection";
import { ContentSize, Section } from "@/components/UI/Section";
import { Headline, HeadlineContainer, Subline } from "@/components/UI/Headline";

export default function Sections() {
  const pageContent = {
    title: "Sections",
    tag: 'h1',
    description: "A collection of Sections elements.",
  }

  return (
    <main>
      <Section>
        <ContentSize>
          <HeadlineContainer inlineComponent={false}>
            <Headline as="h1">{pageContent.title}</Headline>
            <Subline>{pageContent.description}</Subline>
          </HeadlineContainer>
        </ContentSize>
      </Section>
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">Wave section</Headline>
          </HeadlineContainer>
          <Element>
            <WaveSection />
          </Element>
        </ContentSize>
      </Section>
    </main>
  )
}