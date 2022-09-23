import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CrearCursoComponente from './componentes/CrearCursoComponente';
import CrearDescuentoComponente from './componentes/CrearDescuentoComponente';
import Footercomponente from './componentes/Footercomponente';
import HeaderComponente from './componentes/HeaderComponente';
import Lista_curso_componente from './componentes/Lista_cursos_componente';
import Lista_descuentos_componente from './componentes/Lista_descuentos_componente';

function App() {
  return (
    <div>
    <Router>
      <HeaderComponente/>
      <div className='container'>
         <Switch>
         <Route exact path = "/" component = {Lista_curso_componente}></Route>
         <Route path = "/cursos" component = {Lista_curso_componente}></Route>
         <Route path = "/crear-curso" component = {CrearCursoComponente}></Route>
         <Route path = "/editarcurso/:id" component = {CrearCursoComponente}></Route>
          <Route path = "/descuentos" component = {Lista_descuentos_componente}></Route>
          <Route path = "/crear-descuento/:id" component = {CrearDescuentoComponente}></Route>
        </Switch>
        </div>
        </Router>
    <Footercomponente/>
    </div>
  );  
}

export default App;
