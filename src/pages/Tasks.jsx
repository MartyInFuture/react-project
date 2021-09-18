import { useState } from "react";
import { Link } from "react-router-dom";

const Tasks = () => {

    const data = {

    title: "Sprint 1",
    startDate: "2020-12-30",
    endDate: "2020-12-31",
    duration: 1,
    tasks: [
            {
                title: "Task 1",
                hoursPlanned: 1,
                hoursWasted: 0,
                hoursWastedPerDay: [
                    {
                        currentDay: "2020-12-31",
                        singleHoursWasted: 0
                    }
                ],
                _id: "507f1f77bcf86cd799439011",
                __v: 0
            }
        ],
    projectId: "507f1f77bcf86cd799439012",
    _id: "507f1f77bcf86cd799439013",
    __v: 0
}
        

    const [counter, setcounter] = useState(1);
    const [filterText, setfilterText] = useState("");

    const increment = () => {
        if (counter !== 7) {
            const resIncrement = counter + 1;
            setcounter(resIncrement);
        }
        
    }

    const decrement = () => {
        if (counter !== 1) {
            const resDecrement = counter - 1;
            setcounter(resDecrement);
        }
        
    }

    const modalOpen = () => {
        console.log("modalOpen()");
    }

    const correctTitleTask = () => {
        console.log("correctTitleTask()");
    }

    const deleteTask = () => {
        console.log("deleteTask()");
    }

    const diagrammOpenFn = () => {
        console.log("diagrammOpenFn()");
    }

    const filterChange = e => {
        const text = e.target.value;
        // console.log(text);
        setfilterText(text);
    }
    
    return (
        <div>
            <div>
                {/* <Link>Показати спринти</Link> */}
            </div>
            <div>
                <div>
                    <button type="button" onClick={increment}>добавить</button>
                    <p>{counter}/7</p>
                    <button type="button" onClick={decrement}>Отнять</button>
                </div>
                
                {/* <p>{counter === 1 && data.date.day} {counter > 1 && data.date.day + (counter - 1)}.{data.date.month < 10 && (<span>0</span>)}{data.date.month}.{data.date.year}</p> */}
            </div>
            <div>
                <div>
                    <h2>{data.title}</h2>
                    <button type="button" onClick={correctTitleTask}>Карандаш</button>
                    <button type="button" onClick={modalOpen} >+</button>
                    <button type="button" onClick={diagrammOpenFn}>Diagramm</button>
                </div>
                <div>
                    <input type="text" onChange={filterChange}/>
                </div>
                {/* filterText === "" && */}
                { data.tasks.map(item => (
                    <div key={item._id}>
                        <h3>{item.title}</h3>
                        <p><span>Заплановано годин</span><span>{item.hoursPlanned}</span></p>
                        <p><span>Витрачено год / день</span><span>{item.hoursWasted}</span></p>
                        <p><span>Витрачено годин</span><span>{item.hoursWastedPerDay.singleHoursWasted}</span></p>
                        <button type="button" onClick={deleteTask}>Delete</button>
                    </div>
                ))}
                {/* {filterText !== "" && data.tasks.map(item => (
                    <div key={item.name}>
                        <h3>{item.name}</h3>
                        <p><span>Заплановано годин</span><span>{item.planned}</span></p>
                        <p><span>Витрачено год / день</span><span>{item.spentDay}</span></p>
                        <p><span>Витрачено годин</span><span>{item.spent}</span></p>
                        <button type="button" onClick={deleteTask}>Delete</button>
                    </div>
                ))} */}
                
            </div>

            

        </div>
        

    );
}

export default Tasks;