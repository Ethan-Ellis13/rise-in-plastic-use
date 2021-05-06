const production = document.querySelector('#worldwide-chart');
const myChart1 = new Chart(production, {
  type: 'line',
  data: {
    labels: [1950, 1976, 1989, 2002, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    datasets: [{
      label: 'Worldwide Production of Plastic Over 69 years',
      borderColor: '#ECA8A8',
      data: [1.5, 50, 100, 200, 245, 250, 270, 279, 288, 299, 311, 322, 335, 348, 359, 368,]
    }],
  },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Production Volume In Million Metric Tons'
        }
      }],
      xAxes:  [{
        scaleLabel: {
          display: true,
          labelString: 'Years'
        }
      }]
    }
  }
});