import React,{useState} from 'react'
import './styles.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link,useHistory} from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Register(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [value,setValue] = useState('')
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    async function handleNewIncident(e){

        e.preventDefault();

        const data = {title,description,value}

        try{
        await api.post('incidents',data,{
            headers:{
                Authorization:ongId
            }
        })
        history.push('/profile')
        }catch(e){
            alert('Erro no cadastro do caso')
        }

    }
    return(
        <div className="newIncident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="logo"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva um caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className = "back-link" to="/profile">
                        <FiArrowLeft size={16} color = "#E02041"/>
                        Voltar para home</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                <input value = {title} onChange={e=>setTitle(e.target.value)} placeholder="Título do caso" />
                <textarea value = {description} onChange={e=>setDescription(e.target.value)} placeholder = "Descrição"/>
                <input value = {value} onChange={e=>setValue(e.target.value)} placeholder = "Valor em reais"/>
                <button type = "submit" className="button">Cadastrar</button>
                
                </form>
            </div>
        </div>
    )
}