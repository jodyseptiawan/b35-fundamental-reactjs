function List(props) {
    console.log(props)

    const name = props.name
    const color = props.color
    const year = props.year

    return (
        <div>
            <h1>{name}</h1>
            <p>{color} - <b>{year}</b></p>
            
        </div>
    )
}

export default List