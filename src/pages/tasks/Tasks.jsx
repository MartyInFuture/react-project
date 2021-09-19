// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../../Components/common/button/Button';
// import TaskList from '../../Components/tasks/taskList/TaskList';
// import Title from '../../Components/common/title/Title';
// import Counter from '../../Components/tasks/Counter/Counter';
// import ContentContainer from '../../Components/common/containers/contentContainer/ContentContainer';
// import { TasksStyled } from './TasksStyled';

// const Tasks = () => {
//   const [filterText, setfilterText] = useState('');

//   const data = {
//     title: 'Sprint 1',
//     startDate: '2020-12-30',
//     endDate: '2020-12-31',
//     duration: 1,
//     tasks: [
//       {
//         title: 'Task 1',
//         hoursPlanned: 1,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2020-12-31',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 2',
//         hoursPlanned: 2,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-5-12',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 3',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 4',
//         hoursPlanned: 4,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-10-01',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 5',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 6',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 7',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 8',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 9',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 10',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 11',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 12',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 13',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 14',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//       {
//         title: 'Task 15',
//         hoursPlanned: 3,
//         hoursWasted: 0,
//         hoursWastedPerDay: [
//           {
//             currentDay: '2021-6-19',
//             singleHoursWasted: 0,
//           },
//         ],
//         _id: '507f1f77bcf86cd799439011',
//         __v: 0,
//       },
//     ],
//     projectId: '507f1f77bcf86cd799439012',
//     _id: '507f1f77bcf86cd799439013',
//     __v: 0,
//   };

//   const modalOpen = () => {
//     console.log('modalOpen()');
//   };

//   const correctTitleTask = () => {
//     console.log('correctTitleTask()');
//   };

//   const diagrammOpenFn = () => {
//     console.log('diagrammOpenFn()');
//   };

//   const filterChange = (e) => {
//     const text = e.target.value;
//     setfilterText(text);
//   };

//   return (
//     <ContentContainer>
//       <TasksStyled>
//         <div>{/* <Link>Показати спринти</Link> */}</div>
//         <Counter data={data} />
//         <div>
//           <div className="inputBox">
//             <input
//               type="text"
//               onChange={filterChange}
//               className="inputSearch"
//             />
//           </div>
//           <div>
//             <div className="TaskWrapper">
//               <Title title={data.title} />
//               <div className="btnEditTitle">
//                 <Button icon="edit" classBtn="editDelete" />
//               </div>
//             </div>
//             <div className="btnEditTitleAfter"></div>
//             <div className="btnAddTitle">
//               <Button />
//             </div>
//             <div className="btnAddchartTitle">
//               <Button icon="addchart" />
//             </div>
//           </div>
//           <TaskList />
//         </div>
//       </TasksStyled>
//     </ContentContainer>
//   );
// };

// export default Tasks;
