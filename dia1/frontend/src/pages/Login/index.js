import React, {useState} from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link,useHistory} from 'react-router-dom';
import api from '../../services/api';

export default function Login(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});

            console.log(response.data.ong.name); //salvar o nome da ong retornada no storage do navegador
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name);
            history.push('/profile');
        }catch(err){
            alert('falha no login, tente novamente');
        }


    }
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua id" 
                    value={id}
                    onChange={e => setId(e.target.value)}/>
                    <button type="submit" className="button" >Entrar</button>
                
                    <Link className="back-link" to="/register" >
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        <img src={heroesImg} alt="heroes"/>
        </div>
        
    )
}