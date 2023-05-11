import { Link } from 'react-router-dom';
import './styles.css';

export default function Header(){
    return(
        <header>
            <div>
                <Link to="/">
                    <h1>GitHub Desafio</h1>
                </Link>
            </div>
        </header>

    );
}