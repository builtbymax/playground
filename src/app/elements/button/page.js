import Navigation from "@/components/navigation/Navigation";
import Section from "@/layouts/Section";
import Headline from "@/components/headline-container/HeadlineContainer";

export default function Button() {
  return (
    <main>
      <Navigation />
      <Section spacingBottom={false}>
        <Headline headline="Buttons" tag="h1" />
      </Section>
    </main>
  )
}