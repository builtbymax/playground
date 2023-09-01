import Navigation from "@/components/navigation/Navigation";
import Section from "@/layouts/Section";
import Element from "@/layouts/Element";
import Headline from "@/components/headline-container/HeadlineContainer";
import WaveSection from "./(components)/WaveSection";

export default function Sections() {
  const pageContent = {
    title: "Sections",
    tag: 'h1',
    description: "A collection of Sections elements.",
  }

  return (
    <main>
      <Navigation />
      <Section spacingBottom={false}>
        <Headline headline={pageContent.title} subline={pageContent.description} tag={pageContent.tag} inlineComponent={false} />
      </Section>
      <Section>
        <Headline headline="Wave Section" tag="h2" />
        <Element>
          <WaveSection />
        </Element>
      </Section>
    </main>
  )
}