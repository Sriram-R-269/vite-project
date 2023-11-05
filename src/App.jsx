import './App.css'

function App() {
  const data = [{
  
    toph5 : "FREE",
    toph1 : "$0/month",
    middlep : "rejnndkk",
   },

  {
    toph5 : "PLUS",
    toph1 : "$9/month",
    middlep : "rejnndkk",
   },

  {
    toph5 : "PRO",
    toph1 : "$49/month",
    middlep : "rejnndkk",
   }
  
]
  return (
    <div className='app'>
      {
        data.map((movie, idx)=>(
          <MyCard key={idx}
      toph5 = {movie.toph5}
      toph1 = {movie.toph1}
      middlep = {movie.middlep}
      />
        ))
        }
      
    </div>
  )
}

export default App



function MyCard(prop) {

  return (
    <div className='card'>
      <div className='top'>
      <h5>{prop.toph5}</h5>
      <h1>{prop.toph1}</h1>
      </div>
      <div className='middle'>
        <p>{prop.middlep}</p>
        <p>hdjkkjkxj</p>
      </div>
    <div className='btn'>
      <button>Button</button>
    </div>
    </div>
  )
}