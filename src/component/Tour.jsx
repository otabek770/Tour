

export default function Tour({price,name,image,info}) {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{info}</p>
      <p>{price}</p>
    
    </div>
  )
}
