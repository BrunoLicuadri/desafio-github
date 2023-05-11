import { Link } from 'react-router-dom';
import './styles.css';

export default function Home() {
    return (
        <main>
            <section>
                <div className="home-intro">
                    <h1>Desafio GitHub API</h1>
                    <p>GK - God Knows: Faith in Java Learning</p>
                </div>
                <div className="begin-btn">
                    <Link to="/searchuser">
                        <p>Começar</p>
                    </Link>
                </div>
            </section>
        </main>


    );
}