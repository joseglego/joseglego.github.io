import React from 'react';
import ReactGA from 'react-ga';

function Analytics ({ webpageTitle }) {
  React.useEffect(() => {
    const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    if (analyticsId) {
      ReactGA.initialize(analyticsId);
      ReactGA.pageview(webpageTitle);
    }
  }, [webpageTitle]);
  return (<></>);
}

export default Analytics;
