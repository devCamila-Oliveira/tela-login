import { useState } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'

function Home() {
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
        <div className="container">
            <form>
                <h1>Login</h1>
                <input placeholder="Nome" name="nome" type="text"     />
                <input placeholder="Idade" name="idade" type="number" />
                <input placeholder="Email" name="email" type="email"  />
                <button type="button"> Cadastrar </button>
            </form>

            {users.map(user => (
                <div key={user.id} className='card'>
                    <div>
                        <p>Nome:  <span>{user.name}</span>  </p>
                        <p>Idade: <span>{user.age}</span>   </p>
                        <p>Email: <span>{user.email}</span> </p>
                    </div>
                    <button>
                        <img src={Trash} width={20} height={20}></img>
                    </button>
                </div>
            ))}

        </div>
    )
}

export default Home
