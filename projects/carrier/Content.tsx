import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import LangSwitch from '@components/LangSwitch';

import { Container } from '@components/layout';
import { ContentTitle, Section, Paragraph, PostMarksHr, ParagraphPostmark } from '@components/contentStyles';

import { ListItem, IconList, IconListItem } from '@components/layout';
import { FeatureList } from '@projects/featured';

import Gallery from './Gallery';

interface statsProps {
  count: number;
  affix: string;
}

interface ParagraphProps {
  paragraph: string;
}

export default function Content() {
  const { t, i18n } = useTranslation('carrier');

  const isItalic = i18n.language === 'en';
  const itemSpace = i18n.language === 'en' ? 'normal' : 'wide';

  return(
    <>
      <Container as="section" responsive={{'@m768': 'max640'}}>
        <LangSwitch position="articleStart" responsive={{ '@mHover': 'hover' }} />
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('intro.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('intro.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('question.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('question.content')}} purpose="question" italic={isItalic} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('stats.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('stats.description')}} indent />
          <FeatureList space={itemSpace} siblings="hasSiblings">
            <ListItem nomark>
              <ContentTitle featurednumber="normal">60</ContentTitle>
              <Paragraph dangerouslySetInnerHTML={{__html: t('stats.respond.affix')}} purpose="affix" sectionend />
            </ListItem>
          </FeatureList>
          <IconList>
            {t<string, statsProps[]>('stats.respond.findings', { returnObjects: true }).map(({ count, affix }, index: number) => (
              <IconListItem purpose="noTitle" prefixwidth={24} nomark key={`statsFinding-${index}`}>
                <ContentTitle as="strong" purpose="iconListItem">{count}</ContentTitle>
                <Paragraph sectionend>{affix}</Paragraph>
              </IconListItem>
            ))}
          </IconList>
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('who.title')}} />
          <Image src="/projects/carrier/min-an.svg" width={192} height={160} alt={t('who.alt')} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('who.description')}} indent />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('who.understanding.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('who.understanding.description')}} indent />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('who.negligence.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('who.negligence.description')}} indent />
          <ContentTitle purpose="paragraph" dangerouslySetInnerHTML={{__html: t('who.incentive.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('who.incentive.description')}} indent />
        </Section>
        <Section>
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('why.title')}} />
          {t<string, ParagraphProps[]>('why.descriptions', { returnObjects: true }).map(({ paragraph }, index: number) => (
            <Paragraph dangerouslySetInnerHTML={{__html: paragraph}} key={`why-description-${index}`} indent />
          ))}
        </Section>
        <Section>
          <Gallery />
        </Section>
        <Section has="postmarks">
          <ContentTitle purpose="section" dangerouslySetInnerHTML={{__html: t('status.title')}} />
          <Paragraph dangerouslySetInnerHTML={{__html: t('status.description')}} indent />
        </Section>
        <Section isgroupend>
          <PostMarksHr />
          <ParagraphPostmark dangerouslySetInnerHTML={{__html: t('postmark.description')}} />
        </Section>
      </Container>
    </>
  );
}
