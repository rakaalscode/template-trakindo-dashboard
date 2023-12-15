// chart function
function createChart(chartId, chartType, data, options, plugins, legendCallback, legendId) {
  let ctx = document.getElementById(chartId).getContext('2d');

  let chart = new Chart(ctx, {
    type: chartType,
    data: data,
    options: options,
    plugins: plugins,
  });

  if (legendCallback) {
    document.getElementById(legendId).innerHTML = legendCallback(chart);
  }
  
  return chart;
}

// function generate data 

function generateDateLabels(startDate, endDate, stepSize) {
  const labels = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
      labels.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + stepSize);
  }

  return labels;
}

function formatDateLabel(dateString) {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
}



// ===== Doughnut Invoice =====

let doughnutData = {
  labels: ["Vendor A", "Vendor B", "Vendor C", "Vendor D", "Vendor E", "Vendor F"],
  datasets: [{
    data: [19, 33, 12, 14, 17, 5],
    backgroundColor: ["#2E90FA", "#F79009", "#12B76A", "#EE46BC", "#6172F3", "#4E5BA6"],
    borderColor: "white"
  }],
};

let doughnutOptions = {
  plugins: {
    datalabels: {
      color: 'white', // Set the color of the data labels to white
      font: {
        size:'14px'
      },
      formatter: function(value, context) {
        return value + '%'; // Format the label as percentage
      }
    },
    legend: {
      display: false, // Set to false to hide the legend (labels/filters)
    }
  },
};


let doughnutLegendCallback = function(chart) {
  let legendHtml = '<div class="grid grid-cols-2 gap-7">';
  let data = chart.data;
  for (let i = 0; i < data.labels.length; i++) {
    const label = data.labels[i];
    const color = data.datasets[0].backgroundColor[i];
    const value = data.datasets[0].data[i];
    legendHtml += `<div class="flex item items-start gap-2">
        <span class="block h-2.5 w-2.5 mt-1.5 rounded-full whitespace-nowrap" style="background-color: ${color};"></span>
        <div>
          <span class="block font-medium text-gray_2-500 mb-1">${label}</span>
          <span class="block text-xl font-semibold text-gray_2-900">Rp. ${value}jt</span>
        </div>
      </div>
    `;
  }

  legendHtml += '</div>';
  return legendHtml;
};

// Create a doughnut chart
createChart('invoice_doughnut_chart', 'doughnut', doughnutData, doughnutOptions, [ChartDataLabels], doughnutLegendCallback, 'invoice_doughnut_legend');


// ===== Line Daily Invoice =====


const startDate = new Date("2023-11-7");
const endDate = new Date("2023-12-6");
const stepSize = 3;

const dateLabels = generateDateLabels(startDate, endDate, stepSize);
const formattedLabels = dateLabels.map(label => formatDateLabel(label));

let lineData = {
  labels: formattedLabels,
  datasets: [
    {
      label: 'Invoice Paid',
      data: [140, 135, 134, 133, 132, 131, 134, 120, 118, 117, 109],
      borderColor: "#008C4F",
      backgroundColor: (context) => {
        if (!context.chart.chartArea) {
          return;
        }
        const { ctx, chartArea: { top, bottom } } = context.chart;
        // Define colors for the gradient
        const greenColor = 'rgba(73, 164, 98, 0.1)';
        const greenWhite = 'rgba(73, 164, 98, 0.00)';
        // Create linear gradient
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, greenColor);
        gradientBg.addColorStop(1, greenWhite);
        return gradientBg;
      },
      fill: true,
      pointRadius: 0,
      pointHoverRadius: 0,
    },{
      label: 'Invoice Unpaid',
      data: [99, 95, 91, 85, 80, 79, 78, 76, 74, 69, 65],
      borderColor: "#F3902F",
      backgroundColor: "#F3902F",
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 0
    },
],
};

let lineOptions = {
  plugins: {
    responsive: false,
    legend: {
      display: false, // Hide the default legend
    },
    legendCallback: function (chart) {
        return '';
    },
  },
  maintainAspectRatio: false, // Disable maintaining aspect ratio
  aspectRatio: 1.24, // Set your desired aspect ratio (width/height)
  scales: {
    x: {
      grid: {
        display: false // Hide vertical grid lines
      },
      ticks: {
        stepSize: 3,
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50,
        callback: function (value, index, values) {
          return value + (value > 0 ? 'K' : '');
        }
      }
    }
  }
};

let InvoiceLegendCallback = function(chart) {
  let legendHtml = '<div class="grid grid-cols-2 gap-7">';
  let data = chart.data;
  for (let i = 0; i < data.labels.length; i++) {
    const label = data.labels[i];
    const color = data.datasets[0].backgroundColor[i];
    const value = data.datasets[0].data[i];
    legendHtml += `<div class="flex item items-start gap-2">
        <span class="block h-2.5 w-2.5 mt-1.5 rounded-full whitespace-nowrap" style="background-color: ${color};"></span>
        <div>
          <span class="block font-medium text-gray_2-500 mb-1">${label}</span>
          <span class="block text-xl font-semibold text-gray_2-900">Rp. ${value}jt</span>
        </div>
      </div>
    `;
  }

  legendHtml += '</div>';
  return legendHtml;
};

// Create a line chart
createChart('invoice_line_daily_chart', 'line', lineData, lineOptions, []);


// ===== Bar Invoice =====


let barData = {
  labels: ["Draft", "Submitted", "Waiting for Verification", "Waiting for Approval", "Need Verification", "Need Approval", "Action Needed - Revision Required", "Action Needed - Waiting for Hard Copy", "Submitted to Finance", "Completed", "Rejected"],
  datasets: [{
    data: [45, 46, 30, 50, 30, 50, 30 ,40 ,38, 28, 50],
    backgroundColor: (context) => {
      if (!context.chart.chartArea) {
        return;
      }
      const { ctx, chartArea: { top, bottom } } = context.chart;
      // Define colors for the gradient
      const greenColor = 'rgba(253, 186, 18, 0.5)';
      const whiteColor = 'rgba(255, 218, 124, 0.2)';
      // Create linear gradient
      const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
      gradientBg.addColorStop(0, greenColor);
      gradientBg.addColorStop(1, whiteColor);
      return gradientBg;
    },
    borderColor: [
      'rgba(253, 186, 18, 1)',
    ],
    borderWidth: {
      top: 4,
      right: 0,
      bottom: 0,
      left: 0
    }
  }],
};


let barData2 = {
  labels: ["Draft", "Submitted", "Waiting for Verification", "Waiting for Approval", "Need Verification", "Need Approval", "Action Needed - Revision Required", "Action Needed - Waiting for Hard Copy", "Submitted to Finance", "Completed", "Rejected"],
  datasets: [{
    data: [450000, 460000, 300000, 500000, 300000, 500000, 300000 ,400000 ,380000, 280000, 500000],
    backgroundColor: (context) => {
      if (!context.chart.chartArea) {
        return;
      }
      const { ctx, chartArea: { top, bottom } } = context.chart;
      // Define colors for the gradient
      const greenColor = 'rgba(253, 186, 18, 0.5)';
      const whiteColor = 'rgba(255, 218, 124, 0.2)';
      // Create linear gradient
      const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
      gradientBg.addColorStop(0, greenColor);
      gradientBg.addColorStop(1, whiteColor);
      return gradientBg;
    },
    borderColor: [
      'rgba(253, 186, 18, 1)',
    ],
    borderWidth: {
      top: 4,
      right: 0,
      bottom: 0,
      left: 0
    }
  }],
};

let barOptions = {
  plugins: {
    legend: {
      display: false, // Set to false to hide the legend (labels/filters)
    }
  },
  maintainAspectRatio: false, // Disable maintaining aspect ratio
  aspectRatio: 1.24, // Set your desired aspect ratio (width/height)
  scales: {
    x: {
      ticks:{
        color: '#5E677B',
        // font:{
        //   size: '14px',
        //   weight: '600'
        // }
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false // Hide vertical grid lines
      },
      ticks: {
        stepSize: 25,
      }
    }
  },
};

let barOptions2 = {
  plugins: {
    legend: {
      display: false, // Set to false to hide the legend (labels/filters)
    }
  },
  maintainAspectRatio: false, // Disable maintaining aspect ratio
  aspectRatio: 1.24, // Set your desired aspect ratio (width/height)
  scales: {
    x: {
      ticks:{
        color: '#5E677B',
        // font:{
        //   size: '14px',
        //   weight: '600'
        // }
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false // Hide vertical grid lines
      },
      ticks: {
        stepSize: 250000,
      }
    }
  },
};

// Create a bar chart
createChart('invoice_bar_status_chart', 'bar', barData, barOptions, [])
createChart('invoice_bar_status_chart2', 'bar', barData2, barOptions2, [])