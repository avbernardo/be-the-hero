import React,{useState} from 'react';
import './styles.css'
import {Link,useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
export default function Logon(){

    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        const data = {id};

        try{
            const response = await api.post('session',data)
            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName',response.data.name)
            
            history.push('/profile')


        }catch(e){
            alert('Erro no login')
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src = {logoImg} alt = "logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder = "Sua ID" value = {id} onChange = {e => setId(e.target.value)}></input>
                    <button className="button" type = "submit">Entrar</button>

                    <Link className = "back-link" to="/register">
                        <FiLogIn size={16} color = "#E02041"/>
                        Não tenho cadastro</Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}