export default function List(props) {
    return (
        <ul className='names-list'>
            {props.users.map(item => {
                return <li id={item.id} className='name' onClick={(id) => props.getId(item.id)}>{item.name}</li>
            })}
        </ul>
    )
}