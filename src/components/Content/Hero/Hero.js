import { HeadlineContainer, Roofline, Headline, Subline } from '@/components/UI/Headline';
import { Media } from '@/components/UI/Media';
import { ContentSize } from '@/components/UI/Section';
import StageImage from '../../../../public/stage-playground.png';
import Styles from './Hero.module.scss';

// Optional - only used for playground animation
import { HeroAnimation } from './HeroAnimation';

const Hero = ({ content }) => {
  if (!content) {
    content = fallbackContent;
  }

  return (
    <div className={Styles['hero-element-container']}>
      <ContentSize size="sl" className={Styles['hero-content-size']}>
      { content.image ? (
          <div className={Styles['hero-media-block']}>
            <HeroAnimation />
            <Media asset={content.image} quality={100} priority={true} />
          </div>
        ) : null}
        <div className={Styles['hero-content-block']}>
          <HeadlineContainer inlineComponent={false}>
            <Headline as="h1">{content.heading.heading}</Headline>
            <Subline>{content.heading.subline}</Subline>
          </HeadlineContainer>
        </div>
      </ContentSize>
    </div>
  )
};
Hero.displayName = 'Hero';

export { Hero };

//  Fallback Content
//  ------------------------------------------------------------

const fallbackContent = {
  image: {
    url: StageImage,
    alt: 'Playground 3d Illustration',
    type: 'image',
  },
  heading: {
    heading: 'Digital Playground',
    subline: 'Digital Playground is a dynamic platform for experimentation and learning in Next.js and React. It offers diverse elements for testing purposes, allowing me to explore new concepts, ideas, and techniques.',
  },
};