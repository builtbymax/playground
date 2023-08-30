import Navigation from "@/components/navigation/Navigation";
import Section from "@/layouts/Section";
import Element from "@/layouts/Element";
import Headline from "@/components/headline-container/HeadlineContainer";
import InputTextCounter from "./(components)/InputTextCounter";

export default function Button() {
  const pageContent = {
    title: "Forms",
    tag: 'h1',
    description: "A collection of Form elements.",
  }

  return (
    <main>
      <Navigation />
      <Section spacingBottom={false}>
        <Headline headline={pageContent.title} subline={pageContent.description} tag={pageContent.tag} inlineComponent={false} />
      </Section>
      <Section>
        <Headline headline="Input text counter" tag="h2" />
        <Element>
          <InputTextCounter />
        </Element>
      </Section>
    </main>
  )
}