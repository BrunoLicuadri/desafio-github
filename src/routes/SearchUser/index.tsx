import { Outlet } from 'react-router-dom';
import './styles.css';

export default function SearchUser() {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="searchUser-title">
                        <h1>Encontre um perfil GitHub</h1>
                    </div>
                    <div>
                        <input className="user-input" type="text" placeholder='Usuário GitHub' />
                    </div>
                    <div className="begin-btn">
                        <p>Encontrar</p>
                    </div>
                </div>
            </section>
            <Outlet/>
        </main>
    );
}