import React from 'react';

import styles from './Bricks.module.css';

function Bricks () {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const brickSize = 80;
    const windowHeight = window?.innerHeight || 1;
    const windowWidth = window?.innerWidth || 1;
    const rows = Math.ceil(windowHeight / brickSize);
    const bricksPerRow = Math.ceil(windowWidth / brickSize);
    const tmpDta = Array.from({ length: rows }).map(() =>
      Array.from({ length: bricksPerRow }).map(() => {
        const whiteSpaceRatio = 20;
        const index = Math.floor(Math.random() * Math.floor(whiteSpaceRatio));
        const availableColors = ['red', 'green', 'blue', 'yellow'];
        return availableColors[index] || '';
      })
    );

    setData(tmpDta);
  }, []);

  return (
    <div>
      {data.map((row, rowIndex) => (
        <div className={styles.row} key={`row-${rowIndex}`}>
          {row.map((brick, brickIndex) => (
            <div className={`${styles.brick} ${brick ? styles[brick] : ''}`} key={`brick-${rowIndex}-${brickIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Bricks;
