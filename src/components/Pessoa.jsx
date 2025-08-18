import styles from './Pessoa.module.css'
import loboguara from '../img/loboguara.jpeg'

function Pessoa ({nome, idade, livro,jogo, foto }){

    return(

        <div className={styles.pessoaContainer}>

            
            <p>Nome:{nome}</p>
            <p>Idade:{idade}</p>
            <p>Livro Favorito:{livro}</p>
            <p>Jogo favorito:{jogo}</p>

            <img src={loboguara} alt='lobo-guara'/>

            

           

        </div>
    )
}
export default Pessoa