import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';

function App() {
const [inputFrutas, setInputFrutas] = React.useState("");
const [inputTitulo, setInputTitulo] = React.useState("");
 
   const frutas = useSelector((state) => state.frutasReducer.frutas)
   const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
 

   const dispatch = useDispatch();
   
   function adicionarFruta(event) {
     event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }
    dispatch( {type: "ADICIONAR", value: objFruta});
   }
    function alterarTitulo(event) {
      setInputTitulo(event.target.value);
      dispatch({type: "ALTERAR", value:event.target.value});
    }

    return (
    <div className="container text-center bg-light border border-dark p-5 mt-4">
    <div className="p-4 bg-warning">
    <Menu />
    </div>
   <form className="bg-dark p-5">
    <label className="display-5 mx-3 text-warning">Titulo</label>
    <input className="p-4 bg-light rounded " placeholder="Digite um título" value={inputTitulo}
    onChange={alterarTitulo}/>
    </form>

 <div className="bg-warning p-5">
    <h1 className="display-4">{stateTitulo}</h1>   
      <form onSubmit={adicionarFruta}>
        <input className="p-2 bg-light rounded " placeholder="Digite uma fruta" value={inputFrutas}
         onChange={(event) => setInputFrutas(event.target.value)}
         />
        <button className="btn btn-dark mx-3 p-2 px-5"> Enviar </button>

      </form>
</div> 
      {frutas.map((fruta, index) => {
        return (
          <li key={index}>{fruta.nome}</li>
        )
      })}
    </div>
  );
}

export default App;