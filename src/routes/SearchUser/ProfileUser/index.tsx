import './styles.css';
import profileImg from "../../../images/profilemg.png";

export default function ProfileUser() {
    return (
        <section>
            <div className="profile-container">
                <div>
                    <img className="imgProfile" src={profileImg} alt="profile-img" />
                </div>
                <div className="profile-info-container">
                    <div className="profile-info-text">
                        <h4>Informações</h4>
                    </div>
                    <div className="profile-box dflex">
                        <h4>Perfil:</h4>
                        <p>link</p> 
                    </div>
                    <div className="profile-box dflex">
                        <h4>Seguidores:</h4>
                        <p>4397</p>
                    </div>
                    <div className="profile-box dflex">
                        <h4>Localidade:</h4>
                        <p>Brazil</p>
                    </div>
                    <div className="profile-box dflex">
                        <h4>Nome:</h4> 
                        <p>Nelio Alves</p> 
                    </div>
                </div>
            </div>
        </section>
    );
}