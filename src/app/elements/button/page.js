import Navigation from "@/components/navigation/Navigation";
import Section from "@/layouts/Section";
import Headline from "@/components/headline-container/HeadlineContainer";

export default function Button() {
  return (
    <main>
      <Navigation />
      <Section>
        <Headline headline="Button" tag="h1" />
      </Section>
    </main>
  )
}