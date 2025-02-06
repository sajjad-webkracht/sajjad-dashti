import * as React from 'react'
import twitterImage from '../images/OG-Main-Preview.png';
import ogImage from '../images/X-Main-Preview.png';
import Favicon32x32 from '../images/favicon-32x32.png';
import Favicon16x16 from '../images/favicon-16x16.png';
import Favicon48x48 from '../images/favicon-48x48.png';
import Favicon180x180 from '../images/favicon-180x180.png';
import Favicon192x192 from '../images/favicon-192x192.png';
import Favicon512x512 from '../images/favicon-512x512.png';



const Seo = ({ title, description }) => {

return (
  <>
    <title>Sajjad Dashti - {title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={twitterImage} />

    <link rel="icon" type="src/image/png" sizes="32x32" href={Favicon32x32} />
    <link rel="icon" type="src/image/png" sizes="16x16" href={Favicon16x16} />
    <link rel="icon" type="src/image/png" sizes="48x48" href={Favicon48x48} />
    <link rel="apple-touch-icon" sizes="180x180" href={Favicon180x180} />
    <link rel="icon" sizes="192x192" href={Favicon192x192} />
    <link rel="icon" sizes="512x512" href={Favicon512x512} />
  </>
)
}

export default Seo