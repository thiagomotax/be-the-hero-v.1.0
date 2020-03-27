import React from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function Login(){
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua id" />
                    <button type="submit" className="button" >Entrar</button>
                
                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        <img src={heroesImg} alt="heroes"/>
        </div>
        
    )
}