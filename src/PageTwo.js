import { useState } from "react";

function PageTwo(props){

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [city, setCity] = useState()

    function nameHandler(e){
        console.log(e.target.value);
        setName(e.target.value)
    }
    function ageHandler(e){
        setAge(e.target.value)
    }
    function cityHandler(e){
        setCity(e.target.value)
    }

    function buttonHandler(){
        const txt = {
            name: name,
            age: age,
            city: city,
            id: Math.random()
        }
        
        props.onInpData(txt)
        console.log(txt);
        
    }

    return (
        <div className="page-two">
            <input onChange={nameHandler} placeholder="Name"></input>
            <input onChange={ageHandler} placeholder="Age" type='number'></input>
            <input onChange={cityHandler} placeholder="City"></input>
            <div>
                <button onClick={buttonHandler}>Click</button>
            </div>
        </div>
    )
}
export default PageTwo