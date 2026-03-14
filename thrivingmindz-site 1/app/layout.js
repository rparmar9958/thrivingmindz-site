import Script from 'next/script';
import './globals.css';
export const metadata = {
  title: {
    default: 'ThrivingMindz | Free Teen Mental Health Support in Frisco & DFW',
    template: '%s | ThrivingMindz',
  },
  description: 'Free therapy, support groups, art therapy, and mental health resources for teens in Frisco, McKinney, Allen, Plano, Prosper, and the Dallas-Fort Worth area. 501(c)(3) nonprofit.',
  keywords: [
    'free therapy for teens', 'teen mental health Frisco TX', 'teen anxiety help Dallas',
    'free counseling for teens Frisco', 'youth mental health DFW', 'teen support groups near me',
    'free mental health services Dallas', 'teen therapist Frisco Texas',
    'school mental health programs Frisco ISD', 'teen depression help',
    'art therapy for teenagers', 'teen meditation', 'LCSW jobs Frisco TX',
    'school social worker jobs Texas', 'mental health volunteer Dallas',
  ],
  authors: [{ name: 'ThrivingMindz' }],
  creator: 'ThrivingMindz',
  publisher: 'ThrivingMindz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thrivingmindz.org',
    siteName: 'ThrivingMindz',
    title: 'ThrivingMindz | Free Teen Mental Health Support in Frisco & DFW',
    description: 'Free therapy, support groups, art therapy, and mental health resources for teens in Frisco and Dallas-Fort Worth. 501(c)(3) nonprofit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThrivingMindz | Free Teen Mental Health Support',
    description: 'Free therapy, support groups, and mental health resources for teens in Frisco & DFW.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

// Structured data for nonprofit organization (local SEO)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'ThrivingMindz',
  url: 'https://thrivingmindz.org',
  logo: 'https://thrivingmindz.org/logo.png',
  description: 'Free teen mental health support including therapy, support groups, art therapy, and meditation in Frisco and the Dallas-Fort Worth area.',
  email: 'thrivingmindz@gmail.com',
  telephone: '+12145296208',
  taxID: '84-1820560',
  nonprofitStatus: '501c3',
  areaServed: [
    { '@type': 'City', name: 'Frisco', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'McKinney', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Allen', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Plano', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Prosper', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'The Colony', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Little Elm', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'State', name: 'Texas' } },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Frisco',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  sameAs: [
    'https://instagram.com/thrivingmindz',
    'https://facebook.com/thrivingmindz',
  ],
  knowsAbout: [
    'teen mental health', 'youth anxiety', 'teen depression', 'art therapy',
    'meditation for teens', 'school mental health', 'free therapy',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-T0MX9V6P6P" strategy="afterInteractive" />
  <Script id="google-analytics" strategy="afterInteractive">
    {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-T0MX9V6P6P');`}
  </Script>
  {children}
</body>
    </html>
  );
}
