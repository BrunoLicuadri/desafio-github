import { useSearchParams } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import { ProfileDTO } from '../../components/GitProfile';
import axios from 'axios';
import { URL_BASE } from '../../utils';
import ProfileUser from '../../components/ProfileUser';

export default function SearchUser() {

    let [loginParams, setLoginParams] = useSearchParams();

    const [userProfile, setUserProfile] = useState<ProfileDTO>();

    function handleclik() {
        axios.get(`${URL_BASE}/${loginParams}`)
            .then(response => {
                setUserProfile(response.data);
                console.log((userProfile))
            });
    }

    return (
        <main>
            <section>
                <div className="container">
                    <div className="searchUser-title">
                        <h1>Encontre um perfil GitHub</h1>
                    </div>
                    <div>
                        <input value={loginParams.get("userlogin") || ""}
                            onChange={(event) => {
                                let userlogin = event.target.value;
                                if (userlogin) {
                                    setLoginParams({ userlogin });
                                } else {
                                    setLoginParams({});
                                }
                            }}
                            className="user-input"
                            type="text"
                            placeholder='Usuário GitHub'
                        />
                    </div>
                    <div className="begin-btn">
                        <button onClick={handleclik} className="find-btn" type='submit'>Encontrar</button>
                    </div>
                </div>
            </section>
            <section>
                {userProfile
                    ? <ProfileUser userDTO={userProfile} />
                    : <h2>Erro ao buscar usuário</h2>
                }
            </section>
        </main>
    );
}