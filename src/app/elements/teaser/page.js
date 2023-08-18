import Navigation from "@/components/navigation/Navigation";
import Section from "@/layouts/Section";
import Headline from "@/components/headline-container/HeadlineContainer";
import TeaserBorderGradient from "./(components)/TeaserBorderGradient";

export default function Teaser() {
  return (
    <main>
      <Navigation />
      <Section>
        <Headline headline="Teaser" tag="h1" inlineComponent={false} />
      </Section>
      <Section>
        <Headline headline="Gradient border teaser" tag="h2" />
        <TeaserBorderGradient />
      </Section>
    </main>
  )
}