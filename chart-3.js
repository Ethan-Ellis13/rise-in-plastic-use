const consumption = document.querySelector('#consumptionPerCompany');
const myChart2 = new Chart(consumption, {
  type: 'pie',
  data: {
    labels: ['CocaCola', 'Pepsico', 'Nestle', 'Danone', 'P&G', 'Unilever', 'Colgate-Palmolive', 'Mars'],
    datasets: [{
      label: "Metric Tonnes of plastic packaging produced Annually (Millions)",
      data: [2900000, 2300000, 1700000, 820000, 714000, 700000, 287008, 184000],
      backgroundColor: ['rgb(43, 158, 158)', 'rgb(87, 43, 158)', 'rgb(158, 43, 97)', 'rgb(43, 158, 95)', 'rgb(158, 156, 43)', 'rgb(158, 87, 43)', 'rgb(166, 26, 23)', 'rgb(23, 61, 166)'],
    }],
  },
})