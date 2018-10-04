import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { CountryDropdown } from 'react-country-region-selector';
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles-compiled.css';
import CreditCardInput from 'react-credit-card-input';
import checkCreditCard from '.././components/CreditValidator';


class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: '',
      name: '',
      lastname: '',
      country: '',
      password: '',
      email: '',
      cardnumber: '',
      cexpiry: '',
      ccvc:'',
    };
  }

  componentDidMount() {
    this.setState({ tipo: this.props.location.state })
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeLastName(event) {
    this.setState({ lastname: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeCardNumber(event) {
    this.setState({ cardnumber: event.target.value });
  }

  handleChangeExpiry(event) {
    this.setState({ cexpiry: event.target.value });
  }

  handleChangeCVC(event) {
    this.setState({ ccvc: event.target.value });
  }

  pago(){
    if (this.state.tipo === 'pro'){
      return (<div><CreditCardInput containerClassName="creditcard" inputClassName="inputCC"
        cardNumberInputProps={{ onChange: this.handleChangeCardNumber.bind(this) }}
        cardExpiryInputProps={{ onChange: this.handleChangeExpiry.bind(this) }}
        cardCVCInputProps={{ onChange: this.handleChangeCVC.bind(this) }}
          />
          
          
          <Cards	number={this.state.cardnumber}
									name={this.state.name + " " + this.state.lastname}
									expiry={this.state.cexpiry}
									cvc={this.state.ccvc}
									 />
          
          </div>  );
    }
  }

  heavyCheckCC(){
    let p;
    if (checkCreditCard(this.state.cardnumber, 'visa')){   
      p = true
    }else{p = false;}
    
    return p;
 }
    
checkFields(){
 let rolo = false;


 if((this.state.name.length > 0) &&
  (this.state.lastname.length > 0) &&
  (this.state.email.length > 0) &&
  (this.state.country.length > 0) &&
  (this.state.password.length > 0)){
    rolo = true;
  };

  if(this.state.tipo === "pro"){
    if((this.state.cardnumber.length > 0) &&
  (this.state.cexpiry.length > 0) &&
  (this.state.ccvc.length > 0)){
  
  }else{
    rolo = false;
  }
  }
  return rolo;
}


 suscribirse() { 
   if (this.checkFields()){
    this.fetchData();
    setTimeout(() => {
      this.props.history.push('/search');
  }, 2000);
   }else{
    window.Materialize.toast('Campos incompletos', 1000);
   }
    
  }


  fetchData(){

    let usuarioPost = {
      tipo: this.state.tipo,
      nombre: this.state.name + " " + this.state.lastname,
      email: this.state.email,
      pais: this.state.country,
    };


    fetch('https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones', { 
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(usuarioPost, '\t')
    })
    .then(JSON.stringify(usuarioPost, '\t'))
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
      window.Materialize.toast('Request succeeded with JSON response', 1000);
    })
    .catch(function (error) {
      console.log('Request failed', error);
      window.Materialize.toast('Request failed', 1000);
    });
  }
  nextPath(path) {
    this.props.history.push(path);
}
  render() {
    const { country } = this.state;

    return (
      <div className="Subscription">
        <Row>
          <form>
		<div className="InpName">
            <Input id="InputName" s={5} label="Nombre" onChange={this.handleChangeName.bind(this)} />
	</div>
	<div className="InpLastName">
            <Input id="InputLastName" s={5} label="Apellido" validate onChange={this.handleChangeLastName.bind(this)} />
            </div>
				<CountryDropdown
              value={country}
              onChange={(val) => this.selectCountry(val)} className="showBlock" />
            <div className="Email">
            <Input type="email" label="Correo Electronico" s={5} validate onChange={this.handleChangeEmail.bind(this)} />
			</div>
			<div className="Contrasenia">
			<Input type="password" label="Contraseña" s={5} validate onChange={this.handleChangePassword.bind(this)} />
			</div>
          </form>

         <div className="ccDiv"> {this.pago()} </div>
         
        </Row>
        <Button waves="green" className="btn blue btnRegistrarse" textclassname="white" onClick={ () => {this.suscribirse()}} disabled={this.state.boton} >Registrarse</Button>
        <Button waves="green" className="btn blue btnCancelar" textclassname="white" onClick={() => this.nextPath('../')}>Cancelar</Button>                 
      </div>
    );
  }
}

export default Subscription;
