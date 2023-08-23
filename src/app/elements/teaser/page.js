import Navigation from "@/components/navigation/Navigation";
import Section from "@/layouts/Section";
import Element from "@/layouts/Element";
import Headline from "@/components/headline-container/HeadlineContainer";
import TeaserBorderGradient from "./(components)/TeaserBorderGradient";
import TeaserImageHover from "./(components)/TeaserImageHover";
import TeaserCollectionWrapper from "./(components)/TeaserCollectionWrapper";
import TeaserSpaceAnimation from "./(components)/TeaserSpaceAnimation";

export default function Teaser() {
  const pageContent = {
    title: "Teaser",
    tag: 'h1',
    description: "A collection of teaser element layouts.",
  }
  return (
    <main>
      <Navigation />
      <Section spacingBottom={false}>
        <Headline headline={pageContent.title} subline={pageContent.description} tag={pageContent.tag} inlineComponent={false} />
      </Section>
      <Section>
        <Headline headline="Gradient border teaser" tag="h2" />
        <Element>
          <TeaserBorderGradient />
        </Element>
      </Section>
      <Section>
        <Headline headline="Image Hover teaser" tag="h2" />
        <Element>
          <TeaserImageHover />
        </Element>
      </Section>
      <Section>
        <Headline headline="Collection Teaser Elements" tag="h2" />
        <Element>
          <TeaserCollectionWrapper />
        </Element>
      </Section>
      <Section>
        <Headline headline="Space like animation teaser" tag="h2" />
        <Element>
          <TeaserSpaceAnimation />
        </Element>
      </Section>
    </main>
  )
}