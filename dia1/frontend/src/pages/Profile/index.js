import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import { useState, useEffect } from 'react';

import api from '../../services/api';
export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => { //SEMPRE QUE O SEGUNDO PARAMETRO ALTERAR, ELE RECARREGA, o 1 é a funcao a ser exec
        api.get('profile', {
            headers: {
                authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    function handleLogout(){
        localStorage.clear();
        history.push('/');

    }
    async function handleDeleteIncident(id){
        try{
            await api.delete('incidents/' + id,
            {headers: {
                authorization: ongId,
            }});

            setIncidents(incidents.filter(incidents => incidents.id !== id));
        }catch(err){
            alert('erro ao deletar caso, tente novamente');
        }
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
               {
                     incidents.map(incident =>  (
                    <li key={incident.id}>
                    <strong>CASO: </strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>{incident.description}</p>

                    <strong>Valor</strong>
                    <p> {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                   ))}
               
            </ul>

        </div>
    )
}