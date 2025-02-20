import './style.css'
import Trash from '../../assets/trash.png'

function Users() {
    const users = [
        {
            id: '1234',
            name: 'Cami',
            age: '21',
            email: 'cami.souza@gmail'
        },
        {
            id: '1235',
            name: 'Yuri',
            age: '23',
            email: 'yuri.lencio@gmail'
        }
    ]

    return (
        <div className='container'>

            {users.map(user => (
                <div key={user.id} className='card'>
                    <div>
                        <p>Nome:  {user.name}  </p>
                        <p>Idade: {user.age}   </p>
                        <p>Email: {user.email} </p>
                    </div>
                    <button>
                        <img src={Trash} width={20} height={20}></img>
                    </button>
                </div>
            ))}

        </div>
    )
}

export default Users
