import { useEffect, useState } from 'react'
import hrData from './hrData.json'
import './App.css'

function App() {
  const [inputValue, setInputvalue] = useState('');
  const [data, setData] = useState([]);

   
  useEffect(() => {
    const filteredData = hrData.Sheet1.filter(data => data.Name.toLowerCase().includes(inputValue) || data.Email.toLowerCase().includes(inputValue) || data.Company.toLowerCase().includes(inputValue) || data.Title.toLowerCase().includes(inputValue));

    inputValue.length > 0 ? setData(filteredData) : setData([]);
    
  },[inputValue])

const handleClick = () => {
  setData(hrData.Sheet1)
}
  return (
    <>
    <div className='container'>
      <h2>Get HR Info</h2>
      <input type="text" value={inputValue} onChange={e => setInputvalue(e.target.value.toLowerCase())} placeholder='Type here....' />

      <button onClick={handleClick}>show all</button>

      <div className='boxes'>
        {/* logic */}
        {data.length>0 && data.map((v,i)=>{
          return <div key={i} className='box'>
            <h3>Name : {v.Name}</h3>
            <h4>Title : {v.Title}</h4>
            <h4>Company : {v.Company}</h4>
            <h4 style={{color:'orange'}} onClick={()=>navigator.clipboard.writeText(v.Email)}>Email : {v.Email}</h4>
          </div>
        })}
      </div>
    </div>
    </>
  )
}

export default App
