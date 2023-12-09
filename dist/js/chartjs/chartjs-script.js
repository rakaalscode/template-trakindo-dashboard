const ctx = document.getElementById('myChart');

const data = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [{
    data: [30, 50, 20, 10, 4],
    backgroundColor: ['red', 'green', 'blue']
  }]
  // datasets: [
  //   {
  //     label: 'Dataset 1',
  //     data: Utils.numbers(NUMBER_CFG),
  //     backgroundColor: Object.values(Utils.CHART_COLORS),
  //   }
  // ]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      }
    },
    plugins: {
      datalabels: {
        color: '#fff', // Label text color
        anchor: 'end', // Position of labels inside the doughnut ('start', 'center', 'end')
        align: 'start', // Alignment of labels inside the doughnut ('start', 'center', 'end')
        offset: 10, // Distance of labels from the center of the doughnut
        font: {
          weight: 'bold'
        },
        formatter: (value, context) => {
          return value + '%'; // Customize label text (you can format it as needed)
        }
      }
    }
  },
  // plugins: {
  //   doughnutlabel: {
  //       labels: [{
  //           text: 'Total: 100',
  //           font: {
  //               size: '16'
  //           }
  //       }]
  //   }
  // }
};

new Chart(ctx, config);
