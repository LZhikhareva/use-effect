export default function List(props) {
    return (
        <ul className='names-list'>
            {props.users.map(item => {
                return <li key={item.id} id={item.id} className='name' onClick={() => props.getId(item.id)}>{item.name}</li>
            })}
        </ul>
    )
}