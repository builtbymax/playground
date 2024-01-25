import { Headline, HeadlineContainer } from "@/components/UI/Headline";
import { ContentSize, Section } from "@/components/UI/Section";

export default function ButtonPage() {
  return (
    <main>
      <Section>
        <ContentSize>
          <HeadlineContainer inlineComponent={false}>
            <Headline as="h1">Buttons</Headline>
          </HeadlineContainer>
        </ContentSize>
      </Section>
    </main>
  )
}