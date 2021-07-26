const countries = document.querySelector('#countries-chart');
const countriesChart = new Chart(countries, {
  type: 'bar',
  data: {
    labels: ['China', 'United States', 'Germany', 'Brazil', 'Japan', 'Pakistan', 'Nigeria', 'Russia', 'Turkey', 'Egypt'],
    datasets: [{
      label: "Metric Tons of Trash Produced in 2020",
      data: [50069741, 37825550, 14476561, 11852055, 7933489, 6412210, 5961750, 5839635, 5596657, 5464471],
      backgroundColor: '#ECA8A8',
    }],
  },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Metric Tons of Trash'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Countries'
        }
      }],
    }
  },
});