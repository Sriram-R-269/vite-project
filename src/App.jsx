import './App.css'

function App() {
  const data = [{
  
    toph5 : "FREE",
    toph1 : "$0/month",
    middlep1 : "✔️ Single user",
    middlep2 : "✔️ 50GB Storage",
    middlep3 : "✔️ Unlimited Public Projects", 
    middlep4 : "✔️ Community Access",
    middlep5 : "❌ Unlimited Private Projects",
    middlep6 : "❌ Dedicated Phone Support",
    middlep7 : "❌ Free Subdomain",
    middlep8 : "❌ Monthly Status Reports",
   },

  {
    toph5 : "PLUS",
    toph1 : "$9/month",
    middlep1 : "✔️ 5 Users",
    middlep2 : "✔️ 50GB Storage",
    middlep3 : "✔️ Unlimited Public Projects", 
    middlep4 : "✔️ Community Access",
    middlep5 : "✔️ Unlimited Private Projects",
    middlep6 : "✔️ Dedicated Phone Support",
    middlep7 : "✔️ Free Subdomain",
    middlep8 : "❌ Monthly Status Reports",
   },

  {
    toph5 : "PRO",
    toph1 : "$49/month",
    middlep1 : "✔️ Unlimited Users",
    middlep2 : "✔️ 50GB Storage",
    middlep3 : "✔️ Unlimited Public Projects", 
    middlep4 : "✔️ Community Access",
    middlep5 : "✔️ Unlimited Private Projects",
    middlep6 : "✔️ Dedicated Phone Support",
    middlep7 : "✔️ Free Subdomain",
    middlep8 : "✔️ Monthly Status Reports",
   }
  
]
  return (
    <div className='app'>
      {
        data.map((tag, idx)=>(
          <MyCard key={idx}
      toph5 = {tag.toph5}
      toph1 = {tag.toph1}
      middlep1 = {tag.middlep1}
      middlep2 = {tag.middlep2}
      middlep3 = {tag.middlep3}
      middlep4 = {tag.middlep4}
      middlep5 = {tag.middlep5}
      middlep6 = {tag.middlep6}
      middlep7 = {tag.middlep7}
      middlep8 = {tag.middlep8}
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
        <p>{prop.middlep1}</p>
        <p>{prop.middlep2}</p>
        <p>{prop.middlep3}</p>
        <p>{prop.middlep4}</p>
        <p>{prop.middlep5}</p>
        <p>{prop.middlep6}</p>
        <p>{prop.middlep7}</p>
        <p>{prop.middlep8}</p>
      </div>
    <div className='btn'>
      <button>Button</button>
    </div>
    </div>
  )
}
