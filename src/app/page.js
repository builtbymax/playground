import Header from "@/components/header/Header";
import Navigation from "@/components/navigation/Navigation";
import Section from "@/layouts/Section";
import Headline from "@/components/headline-container/HeadlineContainer";
import TeaserContainer from "@/layouts/TeaserLayout";
import Teaser from "@/components/teaser/Teaser";

export default function Home() {
  const content = {
    page: {
      title: "Playground",
      logo: true,
    },
    section: {
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
  ];

  return (
    <main>
      <Navigation />
      <Header title={content.page.title} logo={content.page.logo} size="l" />
      <Section>
        <Headline headline={content.section.title} subline={content.section.description} tag={content.section.tag} />
        <TeaserContainer>
          {teasers.map((teaser, index) => (
            <div key={index} className="grid-col gd-xs-12 gd-m-6 gd-l-4">
              <Teaser slug={teaser.slug} title={teaser.title} description={teaser.description} layout={teaser.layout} />
            </div>
          ))}
        </TeaserContainer>
      </Section>
    </main>
  )
}