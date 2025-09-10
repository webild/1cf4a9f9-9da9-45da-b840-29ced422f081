"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline 
        navItems={[
          { name: 'hero', id: 'hero' },
          { name: 'about', id: 'about' },
          { name: 'how-to-buy', id: 'how-to-buy' },
          { name: 'tokenomics', id: 'tokenomics' },
          { name: 'footer', id: 'footer' }
        ]}
        logoSrc="/images/logo.svg"
        buttonText="Get Started"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero title="Welcome to Our Site" description="Engage with us to know more!" primaryButtonText="Learn More" secondaryButtonText="Get Started" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout title="About Us" descriptions={["We are innovative.", "We love technology.", "We bridge gaps."]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant='simple' />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics Overview" description="Detailed insights into our token distribution" tokenData={[{ value: "10M", description: "Total Supply" }, { value: "5M", description: "Circulating Supply" }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase logoSrc="/images/logo.svg" logoWidth={100} logoHeight={50} columns={[
          { title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
          { title: 'Legal', items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
          { title: 'Contact', items: [{ label: 'Email Us', onClick: () => {} }, { label: 'Support', onClick: () => {} }] },
        ]} copyrightText="© 2023 Sample Brand" onPrivacyClick={() => {}} />
      </div>
    </SiteThemeProvider>
  );
}
