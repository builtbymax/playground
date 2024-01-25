import Element from "@/layouts/Element";
import InputTextCounter from "./(components)/InputTextCounter";
import { Headline, HeadlineContainer, Subline } from "@/components/UI/Headline";
import { ContentSize, Section } from "@/components/UI/Section";

export default function Button() {
  const pageContent = {
    title: "Forms",
    tag: 'h1',
    description: "A collection of Form elements.",
  }

  return (
    <main>
      <Section>
        <ContentSize>
          <HeadlineContainer inlineComponent={false}>
            <Headline as={pageContent.tag}>{pageContent.title}</Headline>
            <Subline>{pageContent.description}</Subline>
          </HeadlineContainer>
        </ContentSize>
      </Section>
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">Input text counter</Headline>
          </HeadlineContainer>
          <Element>
            <InputTextCounter />
          </Element>
        </ContentSize>
      </Section>
    </main>
  )
}