import React, { Component } from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {

        return (
			
            <div className="Home">
            <Row></Row>
 <Row></Row>
                <Row>
			<h4><b>Accede a los beneficios a precios pequeños</b></h4>
                    <Col m={11} s={4}>
                        <Card id="free" className='grey lighten-5' textclassname='grey-text' title="Gratis (0)" actions={[<Link to={{
                            pathname: '/subscription',
                            state: 'free'
                        }}> <Button className="green btnSubscription" textclassname="white">
                                 Gratis </Button></Link>]}>
<Table>
  <thead>
    <tr>
      <th scope="beneficios">Beneficios</th>
      <th scope="disponible">Disponibilidad</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Lavados</td>
      <td><i className="material-icons">check_circle_outline</i></td>
    </tr>
    <tr>
      <td>Repuestos</td>
      <td><i className="material-icons">clear</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
                    <Col m={11} s={4}>
                        <Card id="pro" className='grey lighten-5' textclassname='grey-text' title="Premium (U$S 10)" actions={[<Link to={{
                            pathname: '/subscription',
                            state: 'pro'
                        }}><Button className="green btnSubscription" textclassname="white">
                                 Premium </Button></Link>]}>
                                <Table>
  <thead>
    <tr>
      <th scope="beneficios">Beneficios</th>
      <th scope="disponible">Disponibilidad</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Lavados</td>
      <td><i className="material-icons">check_circle_outline</i></td>
    </tr>
    <tr>
      <td>Repuestos</td>
      <td><i className="material-icons">check_circle_outline</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Home;
