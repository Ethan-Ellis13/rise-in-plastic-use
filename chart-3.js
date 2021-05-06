const consumption = document.querySelector('#consumptionPerCompany');
const myChart2 = new Chart(consumption, {
  type: 'pie',
  data: {
    labels: ['CocaCola', 'Pepsico', 'Nestle', 'Danone', 'P&G', 'Unilever', 'Colgate-Palmolive', 'Mars'],
    datasets: [{
      label: "Metric Tonnes of plastic packaging produced Annually (Millions)",
      data: [2900000, 2300000, 1700000, 820000, 714000, 700000, 287008, 184000],
      backgroundColor: ['#CD5E77', '#E17F93', '#EE959E', '#EBA7AC', '#F4C2C2', '#FFCFCD', '#FFD9D7', '#FFEDEB'],
    }],
  },
})