import Element from "@/layouts/Element";
import TeaserBorderGradient from "./(components)/TeaserBorderGradient";
import TeaserImageHover from "./(components)/TeaserImageHover";
import TeaserCollectionWrapper from "./(components)/TeaserCollectionWrapper";
import TeaserSpaceAnimation from "./(components)/TeaserSpaceAnimation";
import ProgressiveBlurTeaser from "./(components)/ProgressiveBlurTeaser";
import { ContentSize, Section } from "@/components/UI/Section";
import { Headline, HeadlineContainer } from "@/components/UI/Headline";

export default function Teaser() {
  const pageContent = {
    title: "Teaser",
    tag: 'h1',
    description: "A collection of teaser element layouts.",
  }
  return (
    <main>
      <Section>
        <ContentSize>
          <HeadlineContainer inlineComponent={false}>
            <Headline as="h1">Teaser</Headline>
          </HeadlineContainer>
        </ContentSize>
      </Section>
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">Gradient border teaser</Headline>
          </HeadlineContainer>
          <Element>
            <TeaserBorderGradient />
          </Element>
        </ContentSize>
      </Section>
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">Image hover teaser</Headline>
          </HeadlineContainer>
          <Element>
            <TeaserImageHover />
          </Element>
        </ContentSize>
      </Section>
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">Teaser collection wrapper</Headline>
          </HeadlineContainer>
          <Element>
            <TeaserCollectionWrapper />
          </Element>
        </ContentSize>
      </Section>
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">Space animation teaser</Headline>
          </HeadlineContainer>
          <Element>
            <TeaserSpaceAnimation />
          </Element>
        </ContentSize>
      </Section>
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">Progressive blur teaser</Headline>
          </HeadlineContainer>
          <Element>
            <ProgressiveBlurTeaser />
          </Element>
        </ContentSize>
      </Section>
    </main>
  )
}