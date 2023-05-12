import './styles.css';
import { useState } from 'react';
import { ProfileDTO } from '../../components/GitProfile';
import axios from 'axios';
import { URL_BASE } from '../../utils';
import ProfileUser from '../../components/ProfileUser';

export default function SearchUser() {

    type FormData = {
        user: string;
    }

    const [userProfile, setUserProfile] = useState<ProfileDTO>();

    const [formData, setFormData] = useState<FormData>(
        {
            user: '',
        }
    );

    function handleInputForm(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value })
    }

    const [error, setError] = useState();

    function handleSubmit(event: any) {
        event.preventDefault();

        axios.get(`${URL_BASE}/${formData.user}`)
            .then(response => {
                setUserProfile(response.data);
                console.log((userProfile))
            })
            .catch(error => {
                setError(error.response.data);
                setUserProfile(undefined);
            })
    }

    return (
        <main>
            <section>
                <div className="container">
                    <div className="searchUser-title">
                        <h1>Encontre um perfil GitHub</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input className="user-input"
                                type="text"
                                name="user"
                                value={formData?.user}
                                placeholder='Usuário GitHub'
                                onChange={handleInputForm}
                            />

                            <div className="begin-btn">
                                <button type='submit' className="find-btn">Encontrar</button>
                            </div>
                        </form>

                    </div>

                </div>
            </section>

            <section>
                {
                    (userProfile && <ProfileUser userDTO={userProfile} />)
                    || (error && <h2>Erro ao buscar usuário</h2>)
                }

            </section>
        </main>
    );
}