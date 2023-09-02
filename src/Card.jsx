const Card = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <span>{props.date}</span>
    </div>
  )
}

export default Card