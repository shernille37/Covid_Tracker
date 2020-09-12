import React, { useState, useEffect } from 'react';
import SubjectItems from './SubjectItems';

const Subjects = () => {
  const URL =
    'https://corona.lmao.ninja/v2/countries/Italy?yesterday=true&strict=true&query';

  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch(URL);
      const fetchedData = await res.json();
      setData(fetchedData);
    })();
  }, []);

  const titles = [
    'Total Cases',
    'Total Deaths',
    'Total Recovered',
    'Cases Today',
    'Deaths Today',
    'Recovered Today',
  ];

  const icons = [
    'fas fa-briefcase-medical',
    'fas fa-skull-crossbones',
    'fas fa-hand-holding-medical',
    'fas fa-globe-europe',
    'fas fa-globe-europe',
    'fas fa-globe-europe',
  ];

  let values;

  {
    data !== undefined &&
      (values = [
        data.cases,
        data.deaths,
        data.recovered,
        data.todayCases,
        data.todayDeaths,
        data.todayRecovered,
      ]);
  }

  return (
    <section>
      {data !== undefined &&
        values.map((value, i) => (
          <SubjectItems
            key={i}
            title={titles[i]}
            value={value}
            icon={icons[i]}
          />
        ))}
    </section>
  );
};

export default Subjects;
