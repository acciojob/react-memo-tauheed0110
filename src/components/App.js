import React, { useMemo, useState } from 'react';
import '../styles/App.css'
const App = () => {
    const [count, setCount] = useState(0);
    const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

    function handleClick(){
        setSkills([...skills, "New Todo"]);
    }

    const expensiveValue = useMemo(()=>{
        return 100000**2;
    }, [skills]);
    
  return (
    <div id='app'>
      <h1>React.useMemo</h1>
      <h1>My Todos</h1>
      <button onClick={handleClick}>Add Todo</button>
      <hr />
      <span>Count: {count}</span>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <h1>Expensive Calculation</h1>
      <p>{expensiveValue}</p>
      <hr/>
      <hr/>
      <ChildComponent skills={skills} setSkills={setSkills}/>
    </div>
  );
}

export default App;

const ChildComponent = React.memo(({skills, setSkills})=>{
    const [input, setInput] = useState('');

    function handleClick(e){
        e.preventDefault();
        if(input.length > 5){
            setSkills([...skills, input]);
        }
    }
    return (
        <>
            <h1>React.memo</h1>
            <form>
                <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                <button onClick={(e)=>{handleClick(e)}}>Add Skill</button>
            </form>
            <ul>
                {
                    skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                    })
                }
            </ul>
        </>
    )
});
