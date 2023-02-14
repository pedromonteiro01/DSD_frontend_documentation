import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Repositório',
    Svg: require('@site/static/img/azure.svg').default,
    description: (
      <>
        Para gestão e armazenamento do código foi utilizado um repositório no Azure Devops.
      </>
    ),
  },
  {
    title: 'Universidade de Aveiro',
    Svg: require('@site/static/img/aveiro.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{
          display: "flex",
          justifyContent: "space-around"
        }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
