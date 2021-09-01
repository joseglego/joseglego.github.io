import React from 'react';
import ReactGA from 'react-ga';
import data from '../../config';

function Analytics ({ webpageTitle }) {
  React.useEffect(() => {
    const analyticsId = data.analyticsId;
    if (analyticsId) {
      ReactGA.initialize(analyticsId);
      ReactGA.pageview(webpageTitle);
    }
  }, [webpageTitle]);
  return (<></>);
}

export default Analytics;
