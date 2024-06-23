/** @format */
import React, { useState, useEffect } from "react";
import { Card, Col, Nav, Row } from "react-bootstrap";

const Solicitations = () => {
  const carData = JSON.parse(localStorage.getItem("carData"));
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    if (carData) {
      const initialActiveTab = carData.reduce((acc, _, index) => {
        acc[index] = "#car";
        return acc;
      }, {});
      setActiveTab(initialActiveTab);
    }
  }, []);

  const handleSelect = (eventKey, index) => {
    setActiveTab((prev) => ({ ...prev, [index]: eventKey }));
  };

  if (!carData || carData.length === 0) {
    return <p>Nenhuma solicitação registrada</p>;
  }

  return (
    <div className="mt-6 py-5">
      <h1 className="w-full flex justify-center items-center my-5">
        Solicitações Recebidas
      </h1>

      <Row xs={1} md={3} className="g-4">
        {carData.map((data, index) => (
          <Col key={index}>
            <Card bg="info" border="success">
              <Card.Header>
                <Nav
                  variant="pills"
                  activeKey={activeTab[index]}
                  onSelect={(eventKey) => handleSelect(eventKey, index)}>
                  <Nav.Item>
                    <Nav.Link eventKey="#car" className="text-white">
                      Veículo
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="#fipe" className="text-white">
                      Fipe
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="#solicitante" className="text-white">
                      Solicitante
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="min-h-[128px]">
                {activeTab[index] === "#car" && (
                  <>
                    <Card.Title className="mb-3">{data.car.Modelo}</Card.Title>
                    <Row xs={2} md={2}>
                      <Col>
                        <Card.Text> {data.car.Marca}</Card.Text>
                        <Card.Text>{data.car.AnoModelo}</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text> {data.car.Valor}</Card.Text>
                        <Card.Text> {data.car.Combustivel}</Card.Text>
                      </Col>
                    </Row>
                  </>
                )}
                {activeTab[index] === "#fipe" && (
                  <>
                    <Card.Text>
                      <strong>Código Fipe:</strong> {data.car.CodigoFipe}
                    </Card.Text>
                    <Card.Text>
                      <strong>Mês Referência:</strong> {data.car.MesReferencia}
                    </Card.Text>
                    <Card.Text>
                      <strong>Sigla Combustível:</strong> {data.car.SiglaCombustivel}
                    </Card.Text>
                  </>
                )}
                {activeTab[index] === "#solicitante" && (
                  <>
                    <Row xs={2} md={2}>
                      <Col>
                        <Card.Text>
                          <strong>Tipo:</strong> {data.tipoComprador}
                        </Card.Text>
                        <Card.Text> {data.nome}</Card.Text>
                        <Card.Text>{data.cpf}</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>{data.email}</Card.Text>
                        <Card.Text>{data.telefone}</Card.Text>
                        <Card.Text>
                          <strong>Meio de Contato</strong> <br /> {data.meioContato}
                        </Card.Text>
                      </Col>
                    </Row>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Solicitations;
