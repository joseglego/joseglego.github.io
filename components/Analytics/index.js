import React from 'react';
import ReactGA from 'react-ga4';
import data from '../../config';

function Analytics ({ webpageTitle }) {
  React.useEffect(() => {
    const analyticsId = data.analyticsId;
    if (analyticsId) {
      ReactGA.initialize(analyticsId);
      ReactGA.send({ hitType: 'pageview', title: webpageTitle });
    }
  }, [webpageTitle]);
  return (<></>);
}

export default Analytics;
