import styles from './Pessoa.module.css'
import loboguara from '../img/loboguara.jpeg'

function Pessoa ({nome, idade, livro, jogo, ano, bebida, cor, filme, musica, frase }){

    return(

        <div className={styles.pessoaContainer}>

            
            <p>Nome:{nome}</p>
            <p>Idade:{idade}</p>
            <p>Livro Favorito:{livro}</p>
            <p>Jogo favorito:{jogo}</p>
            <p>ano de Nascimento:{ano}</p>
            <p>bebida:{bebida}</p>
            <p>Cor favorita:{cor}</p>
            <p>Filme:{filme}</p>
            <p>Musica:{musica}</p>
            <p>frase favorita:{frase}</p>


            <img src={loboguara} alt='lobo-guara'/>

            

           

        </div>
    )
}
export default Pessoa