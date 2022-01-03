import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { styled } from 'stitches.config';
import { screenMobile, screenTablet } from '@utils/screens';

import { Device } from '@projects/cover';

const ScreenshotMobile = styled(Image, {
  position: 'relative',
  zIndex: 1,
  borderRadius: '12px',
});

const ScreenshotTablet = styled('img', {
  width: '272px',
  position: 'absolute',
  zIndex: 1,
  borderRadius: '12px',

  variants: {
    placement: {
      left: {
        top: '$16',
        left: '$16'
      },
      right: {
        top: '40px',
        right: '$16'
      }
    }
  }
});

export default function Cover() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {setMounted(true)}, []);

  const router = useRouter();

  const ImageLang = router.locale === 'en' ? 'en' : 'tw';

  return(
    <Device responsive={{ '@initial': 'mobile' }} vpheight="iphone13" model={{ '@m768': 'mobileDual' }}>
      {mounted && screenMobile &&
        <ScreenshotMobile src={`/projects/carrier/gallery/${ImageLang}/homeIndex.webp`} width={256} height={554} quality={100} alt="Screenshot: Upcoming Health Checks" />
      }
      {screenTablet &&
        <>
          <ScreenshotTablet src={`/projects/carrier/gallery/${ImageLang}/homeIndex.jpg`} placement="left" alt="Screenshot: Upcoming Health Checks" />
          <ScreenshotTablet src={`/projects/carrier/gallery/${ImageLang}/furryShowOnTime.jpg`} placement="right" alt="Screenshot: View the details of Seven" />
        </>
      }
    </Device>
  )
}
