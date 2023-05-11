import './styles.css';
import { ProfileDTO } from '../GitProfile';

type Props = {
    userDTO: ProfileDTO;
}

export default function ProfileUser({userDTO} : Props) {
    return (
        <section>
            <div className="profile-container">
                <div>
                    <img className="imgProfile" src={userDTO.userImg} alt={userDTO.name} />
                </div>
                <div className="profile-info-container">
                    <div className="profile-info-text">
                        <h4>Informações</h4>
                    </div>
                    <div className="profile-box dflex">
                        <h4>Perfil:</h4>
                        <a href={userDTO.link}></a>
                    </div>
                    <div className="profile-box dflex">
                        <h4>Seguidores:</h4>
                        <p>{userDTO.followers}</p>
                    </div>
                    <div className="profile-box dflex">
                        <h4>Localidade:</h4>
                        <p>{userDTO.localtion}</p>
                    </div>
                    <div className="profile-box dflex">
                        <h4>Nome:</h4> 
                        <p>{userDTO.name}</p> 
                    </div>
                </div>
            </div>
        </section>
    );
}