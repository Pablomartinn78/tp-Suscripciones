import React, { Component } from 'react';
import {Col, Card, CardTitle} from 'react-materialize';


class About extends Component {


  render() {

    return (
      <div className="About">

        <Col m={2} s={6}>
  <Card horizontal header={<CardTitle image="https://www.diariomotor.com/imagenes/picscache/1440x655c/peugeot-rcz-futuro-p_1440x655c.jpg"></CardTitle>}>
      <h3>Automania</h3>
		<p>Automania es una concesionaria oficial de Autos Premium de Argentina, creada en el año 1997 por el grupo familiar Lopez, reconocidos por su seriedad y dedicación en el rubro automotriz desde Villa Del Parque.

Contamos con un Concesionario Integral de 3600 metros cuadrados, poniéndonos a la vanguardia técnica en vehículos de alta gama. Nuestro centro de servicio  esta equipado con la más avanzada tecnología, dispositivos de análisis y diagnóstico de ultima generación con procesos certificados en el sistema de gestión de calidad. Profesionales interpretan los resultados de los diagnósticos dándole la mas adecuada solución para el mantenimiento de su auto.

Nuestro equipo de asesores y técnicos reciben formación específica en sus respectivas áreas garantizando así la excelencia del servicio, con un taller conectado punto a punto.

En Automania Argentina prestamos especial atención a la eficiencia y calidez de la atención con nuestros clientes por esta razón trabajamos con un equipo de expertos avalado y certificado para usted y su vehículo estén en las mejores manos y hacer realidad así nuestro lema: "Los clientes son nuestra Vida".</p>
    </Card>
</Col>

      </div>
    );
  }
}

export default About;
