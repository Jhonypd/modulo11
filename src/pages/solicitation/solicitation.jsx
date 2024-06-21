/** @format */
import React from "react";
import { Card, Col, Nav, Row } from "react-bootstrap";

const Solicitations = () => {
  const carData = JSON.parse(localStorage.getItem("carData"));

  if (!carData || carData.length === 0) {
    return <p>Nenhuma solicitação registrada</p>;
  }

  return (
    <div className="mt-6 py-5">
      <h1 className="w-full flex justify-center items-center my-5">
        Solicitações Recebidas
      </h1>

      <Row xs={1} md={2} className="g-4">
        {carData.map((data, index) => (
          <Col key={index}>
            <Card bg="info" border="success">
              <Card.Header>
                <Nav variant="pills" defaultActiveKey="#car">
                  <Nav.Item>
                    <Nav.Link className="text-white" href={`#car${index}`}>Veículo</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="text-white" href={`#fipe${index}`}>Fipe</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="text-white" href={`#solicitante${index}`}>Solicitante</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body id={`car${index}`}>
                <Card.Title className="mb-3">{data.car.Modelo}</Card.Title>
                <Row>
                  <Col>
                    <Card.Text><strong>Marca:</strong> {data.car.Marca}</Card.Text>
                    <Card.Text><strong>Ano Modelo:</strong> {data.car.AnoModelo}</Card.Text>
                    <Card.Text><strong>Combustível:</strong> {data.car.Combustivel}</Card.Text>
                    <Card.Text><strong>Valor:</strong> {data.car.Valor}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body id={`fipe${index}`}>
                <Card.Text><strong>Código Fipe:</strong> {data.car.CodigoFipe}</Card.Text>
                <Card.Text><strong>Mês Referência:</strong> {data.car.MesReferencia}</Card.Text>
                <Card.Text><strong>Sigla Combustível:</strong> {data.car.SiglaCombustivel}</Card.Text>
              </Card.Body>
              <Card.Body id={`solicitante${index}`}>
                <Card.Text><strong>Tipo Comprador:</strong> {data.tipoComprador}</Card.Text>
                <Card.Text><strong>Nome:</strong> {data.nome}</Card.Text>
                <Card.Text><strong>CPF:</strong> {data.cpf}</Card.Text>
                <Card.Text><strong>E-mail:</strong> {data.email}</Card.Text>
                <Card.Text><strong>Telefone:</strong> {data.telefone}</Card.Text>
                <Card.Text><strong>Meio de Contato:</strong> {data.meioContato}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Solicitations;
