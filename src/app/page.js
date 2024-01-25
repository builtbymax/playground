import { Section, ContentSize } from "@/components/UI/Section";
import { HeadlineContainer, Headline, Subline, Roofline } from "@/components/UI/Headline";
import { GridColumn, GridRow } from '@/components/UI/Grid';
import { Hero } from "@/components/Content/Hero/Hero";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/Content/Card/Card";
import { Button } from "@/components/UI/Button";

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
          <div className="teaser-element-container">
            <GridRow>
              {teasers.map((content, index) => (
                <GridColumn key={index} columnSize={{ m: 6, l: 4, }}>
                  <Card className={`card-color-${index}`} {...(content.slug && { href: content.slug })}>
                    <CardHeader>
                      {content.items > 0 && <p><span>0{content.items}</span> {content.items > 1 ? 'Items' : 'Item'}</p>}
                      <p>{content.description}</p>
                    </CardHeader>
                    <CardFooter>
                      <CardTitle as="h3">{content.title}</CardTitle>
                    </CardFooter>
                  </Card>
                </GridColumn>
              ))}
            </GridRow>
          </div>
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
    roofline: "Collection",
    title: "Elements",
    description: "All components and elements in one place, subdivided into categories.",
    tag: 'h2',
  },
};

const teasers = [
  {
    slug: "/elements/teaser",
    title: "Teaser Elements",
    description: "A collection of teaser element layouts.",
    items: 5,
  },
  {
    slug: "/elements/forms",
    title: "Form Elements",
    description: "A collection of Form elements.",
    items: 1,
  },
  {
    slug: "/elements/sections",
    title: "Sections Elements",
    description: "A collection of Sections elements.",
    items: 1,
  },
  {
    // slug: "/elements/button",
    title: "Buttons",
    description: "Coming soon..",
    items: 0,
  },
  {
    // slug: "/elements/content",
    title: "Content Elements",
    description: "Coming soon..",
    items: 0,
  },
  {
    title: "UI Elements",
    description: "Coming soon..",
    items: 0,
  }
];