import { styled } from '../stitches.config';
import { ListItem } from './layout';

export const ContentTitle = styled('h2', {
  fontFamily: '$default',
  fontWeight: 600,

  variants: {
    purpose: {
      section: {
        margin: '0 0 $12',
        fontSize: '$20',
        lineHeight: '24px'
      },
      paragraph: {
        display: 'inline-block',
        margin: '0 0 $4',
        fontSize: '$16',
        lineHeight: '20px'
      },
      iconListItem: {
        margin: 0,
        fontSize: '$16',
        lineHeight: '24px'
      },
    },
    featurednumber: {
      normal: {
        margin: 0,
        display: 'inline-block',
        fontSize: '$18',
        fontWeight: 800,
        fontStyle: 'italic',
        lineHeight: '24px',
      },
      large: {
        display: 'inline-block',
        margin: 0,
        fontSize: '24px',
        fontWeight: 800,
        fontStyle: 'italic',
        lineHeight: '32px',
      }
    },
    scheme: {
      dark: {
        color: 'hsl($shade1500)'
      },
      light: {
        color: 'hsl($shade600)'
      }
    },
    nounderline: {
      true: {
        textDecoration: 'none'
      }
    }
  }
});

export const Section = styled('section', {
  marginBottom: '$24',

  variants: {
    isgroupend: {
      true: {
        margin: 0
      }
    }
  }
});

export const Paragraph = styled('p', {
  margin: '0 0 $16',
  fontFamily: '$default',
  color: 'hsl($shade600)',
  fontSize: '$16',
  lineHeight: '24px',

  variants: {
    indent: {
      true: {
        textIndent: '36px'
      }
    },
    sectionend: {
      true: {
        margin: 0
      }
    },
    postmark: {
      true: {
        fontSize: '$14'
      }
    }
  },

  '& .paragraph-link': {
    color: 'hsl($shade300)'
  },
});

export const ContentList = styled('ul', {
  margin: '0 0 $12',
  padding: '0 0 0 $18'
});

export const ContentListItem = styled(ListItem, {
  color: 'hsl($shade1200)',
  fontFamily: '$default',
  fontSize: '$16',
  lineHeight: '24px'
});
