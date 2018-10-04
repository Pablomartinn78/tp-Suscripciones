import React, { Component } from 'react';
import {Table} from 'react-materialize';


class Search extends Component {
	
    constructor(props){
        super(props);
        this.state = {
          users: [],
          textoBuscar: "",
        };
      }

      
      componentDidMount(){
    
        const url = "https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones";
         fetch(url)
           .then( response => response.json())
           .then( json =>  this.setState({ users: json}))
           .catch();
        console.log(this.state.users)
       }


       inputOnChange (texto) {
        this.setState({
            textoBuscar: texto,
        });
    }
    
    searchedItems(){
        try{
      const { users, textoBuscar } = this.state;
      
      const textoBuscarMinuscula = textoBuscar.toLocaleLowerCase();
    
      if (textoBuscar === ""){
        return users;
      }
    
      const buscados = users.filter( (usuario) => {
      const encontrarTipo = usuario.tipo.toLocaleLowerCase().indexOf(textoBuscarMinuscula) !== -1;
      const encontrarName = usuario.nombre.toLocaleLowerCase().indexOf(textoBuscarMinuscula) !== -1;
      const encontrarPais = usuario.pais.toLocaleLowerCase().indexOf(textoBuscarMinuscula) !== -1;
      const encontrarEmail = usuario.email.toLocaleLowerCase().indexOf(textoBuscarMinuscula) !== -1;
      return encontrarName || encontrarPais || encontrarEmail || encontrarTipo;
    });
    
    return buscados;
}catch(err){

}
    }
    

  render() {

    const { users, textoBuscar } = this.state;
    console.log(users);

    return (
      <div className="Search">
  <h3>Buscar Usuarios</h3>
      <div className="input-group mb-3 input">
			<div className="Buscarr">
  <input type="text" className="Busqueda" placeholder="Busqueda..." aria-label="Search" aria-describedby="button-addon2" onChange={event => this.inputOnChange(event.target.value)} />
	</div>
  <div className="input-group-append">
    <button className="btn green" type="button" id="button-addon2">Buscar</button>
  </div>
</div>


  <div className="loEncontrado">
  {textoBuscar.length > 0 && 
<p>Usuarios Encontrados: {this.searchedItems().length}</p>
}

  <Table className="encontrado" >
 <thead>
    <tr>
      <th scope="type">Tipo</th>
      <th scope="name">Nombre</th>
      <th scope="email">Correo Electronico</th>
      <th scope="country">Pais</th>
    </tr>
  </thead>

{this.searchedItems().map(usuario => 
<tbody>
    <tr>
      <td>{usuario.tipo}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.email}</td>
      <td>{usuario.pais}</td>
    </tr>
</tbody>
)}
</Table>

  </div>
      </div>
    );
  }
}

export default Search;
