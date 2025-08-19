import './App.css'
import MyName from './components/MyName'
import Pessoa from './components/Pessoa'





function App() {
  

  return (

    <section className="hero">

      <div className="content">
      
      <h1>Olá mundo:  </h1>

      <MyName/>

      <Pessoa 
      nome='Sahon Serra '
      idade=' - - -'
      livro=' Vinte mil léguas submarinas'
      jogo=' Kingdom hearts Saga'
      ano='1989'
      bebida='cafe'
      cor=' azul palido'
      filme=' Forest Gump '
      musica=' HOME - hold '
      frase=' ad astra per astra'

     
    
      
      />
      
     </div>
    </section>
    
    
  )
}

export default App
