import Tour from "./Tour"

export default function Tours({list}) {
  return (
    <div>
      {list.map((item)=> < Tour key={item.id} {...item}/>)}
    </div>
  )
}
