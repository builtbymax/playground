import { Section, ContentSize } from "@/components/UI/Section";
import { HeadlineContainer, Headline, Subline, Roofline } from "@/components/UI/Headline";
import { GridColumn, GridRow } from '@/components/UI/Grid';
import { Hero } from "@/components/Content/Hero/Hero";

import Teaser from "@/components/teaser/Teaser";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Roofline>{content.section.roofline}</Roofline>
            <Headline as={content.section.tag}>{content.section.title}</Headline>
            <Subline>{content.section.description}</Subline>
          </HeadlineContainer>
          <Headline as="h2">Coming back soon..</Headline>
          {/* <div className="teaser-element-container">
            <GridRow>
              {teasers.map((teaser, index) => (
                <GridColumn key={index} columnSize={{ m: 6, l: 4, }}>
                  <Teaser slug={teaser.slug} title={teaser.title} description={teaser.description} layout={teaser.layout} />
                </GridColumn>
              ))}
            </GridRow>
          </div> */}
        </ContentSize>
      </Section>
    </main>
  )
};

// <Header title={content.page.title} logo={content.page.logo} size="l" />

//  Content
//  ------------------------------------------------------------

const content = {
  section: {
    roofline: "Most recent",
    title: "Elements",
    description: "A collection of items.",
    tag: 'h2',
  },
};

const teasers = [
  {
    slug: "/elements/button",
    title: "Button",
    description: "A button.",
    layout: '0',
  },
  {
    slug: "/elements/teaser",
    title: "Teaser Elements",
    description: "A collection of teaser element layouts.",
    layout: '0',
  },
  {
    slug: "/elements/forms",
    title: "Form Elements",
    description: "A collection of Form elements.",
    layout: '0',
  },
  {
    slug: "/elements/sections",
    title: "Sections Elements",
    description: "A collection of Sections elements.",
    layout: '0',
  },
];