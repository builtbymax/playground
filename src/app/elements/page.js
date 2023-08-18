import Navigation from "@/components/navigation/Navigation";
import Section from "@/layouts/Section";
import Headline from "@/components/headline-container/HeadlineContainer";

export default function Elements() {
  return (
    <main>
      <Navigation />
      <Section>
        <Headline headline="Elements" tag="h1" />
      </Section>
    </main>
  )
}