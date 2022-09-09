import { Chart } from "react-chartjs-2";
import 'chart.js/auto';
  
const ProjectTypePieChart = ({
    projectTypes
  }) => {
    const data = {
        labels: Object.keys(projectTypes),
        datasets: [{
        label: 'Project Types',
        data: Object.values(projectTypes),
        backgroundColor: [
            'rgb(253, 189, 57)',
            'rgb(200, 207, 45)',
            'rgb(13, 207, 218)',
            'rgb(65, 155, 249)'
        ],
        hoverOffset: 4
        }]
    };  

  return (
  <div class="shadow-lg rounded-lg overflow-hidden">
    <div class="py-3 px-5 bg-gray-50">Project Types</div>
      <Chart 
        type="pie"
        datasetIdKey='projectTypes'
        data={data}
      />
    </div>
  )
}

export default ProjectTypePieChart;
