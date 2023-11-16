  

export default function ({setModal}) {

  return (
    <div className="nav">
      <ul className="nav-list">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li><button onClick={()=>setModal(true)}>sign in</button></li>
      </ul>
    </div>
  )
}
