import { ChartStyled } from './ChartStyled';
import Button from '../common/button/Button';
import buttonIcons from '../../configs/buttonIcons.json';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 70],
    },
    {
      label: 'My Second dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(150, 0, 0)',
      borderColor: 'red',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: 'red',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [60, 49, 67, 80, 50, 42, 15],
    },
  ],
};

// const options = {
//   scales: {
//     yAxes: [
//       {
//         type: 'linear',
//         display: true,
//         position: 'left',
//         id: 'y-axis-1',
//       },
//       {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-2',
//         gridLines: {
//           drawOnArea: false,
//         },
//       },
//     ],
//   },
// };

const Chart = ({ title = 'title', open, setOpen }) => {
  return (
    <>
      {open && (
        <ChartStyled>
          <div className="modal">
            <h3>{title}</h3>
            <div className="buttonWrapper">
              <Button
                classBtn="close"
                icon={buttonIcons.close}
                onHandleClick={() => setOpen(false)}
              />
            </div>
            <Line data={data} />
          </div>
        </ChartStyled>
      )}
    </>
  );
};

export default Chart;
