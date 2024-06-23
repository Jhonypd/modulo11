/** @format */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getMarcas } from "../../utils/getMarcas";
import { getModelos } from "../../utils/getModelos";
import { getAno } from "../../utils/getAno";
import { getInfos } from "../../utils/getInfos";

const vehicleTypes = [{ type: "carros" }, { type: "motos" }, { type: "caminhoes" }];

const RegisterCar = () => {
  const [vehicleType, setVehicleType] = useState(null);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);
  const [models, setModels] = useState([]);
  const [model, setModel] = useState(null);
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(null);
  const [car, setCar] = useState(null);
  const [formData, setFormData] = useState({
    tipoComprador: "",
    nome: "",
    cpf: "",
    cnpj: "",
    email: "",
    telefone: "",
    meioContato: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getMarcas(vehicleType);
        setBrands(data);
      } catch (error) {
        console.error("Erro ao buscar marcas", error);
      }
    };
    if (vehicleType) {
      fetchBrands();
    }
  }, [vehicleType]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const data = await getModelos(vehicleType, brand);
        setModels(data.modelos);
      } catch (error) {
        console.error("Erro ao buscar modelos", error);
      }
    };
    if (vehicleType && brand) {
      fetchModels();
    }
  }, [brand, vehicleType]);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const data = await getAno(vehicleType, brand, model);
        setYears(data);
      } catch (error) {
        console.error("Erro ao buscar anos", error);
      }
    };
    if (vehicleType && brand && model) {
      fetchYears();
    }
  }, [model, brand, vehicleType]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const data = await getInfos(vehicleType, brand, model, year);
        setCar(data);
      } catch (error) {
        console.error("Erro ao buscar informações do carro", error);
      }
    };
    if (vehicleType && brand && model && year) {
      fetchCar();
    }
  }, [year, model, brand, vehicleType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "tipoComprador",
      "nome",
      "cpf",
      "email",
      "telefone",
      "meioContato",
    ];
    const hasEmptyFields = requiredFields.some((field) => !formData[field]);

    if (hasEmptyFields) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("carData")) || [];
    const updatedData = [...existingData, { ...formData, car }];
    localStorage.setItem("carData", JSON.stringify(updatedData));

    navigate("/solicitation");
  };

  return (
    <div className="mt-5 py-5 flex flex-col justify-center items-center">
      <h1 className="w-full flex justify-center items-center">Solicitar simulação</h1>
      <Form onSubmit={handleSubmit} className="flex flex-col py-4 sm:max-w-xl">
        <div className="grid grid-cols-2 gap-4">
          <Form.Select
            className="mb-3"
            size="sm"
            name="tipo"
            onChange={(e) => setVehicleType(e.target.value)}>
            <option>Selecione o tipo</option>
            {vehicleTypes.map((vehicle) => (
              <option key={vehicle.type} value={vehicle.type}>
                {vehicle.type.toUpperCase()}
              </option>
            ))}
          </Form.Select>

          <Form.Select
            className="mb-3"
            size="sm"
            name="marca"
            onChange={(e) => setBrand(e.target.value)}>
            <option>Selecione a marca</option>
            {brands.map((brandItem) => (
              <option key={brandItem.codigo} value={brandItem.codigo}>
                {brandItem.codigo} {brandItem.nome}
              </option>
            ))}
          </Form.Select>

          <Form.Select
            className="mb-3"
            size="sm"
            name="modelo"
            onChange={(e) => setModel(e.target.value)}>
            <option>Selecione o modelo</option>
            {models.map((modelsItem) => (
              <option key={modelsItem.codigo} value={modelsItem.codigo}>
                {modelsItem.codigo} {modelsItem.nome}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="mb-3"
            size="sm"
            name="ano"
            onChange={(e) => setYear(e.target.value)}>
            <option>Selecione o Ano</option>
            {years.map((yearItem) => (
              <option key={yearItem.codigo} value={yearItem.codigo}>
                {yearItem.codigo} {yearItem.nome}
              </option>
            ))}
          </Form.Select>
        </div>
        <h3 className="text-sm my-4">Dados pessoais</h3>
        <Form.Select
          className="mb-3"
          size="sm"
          name="tipoComprador"
          onChange={handleChange}
          value={formData.tipoComprador}>
          <option value="">Tipo comprador</option>
          <option value="Pessoa_fisica">Pessoa física</option>
          <option value="Pessoa_juridica">Pessoa jurídica</option>
        </Form.Select>

        <InputGroup className="mb-3">
          <InputGroup.Text>Nome</InputGroup.Text>
          <Form.Control
            placeholder="Seu nome completo"
            name="nome"
            onChange={handleChange}
            value={formData.nome}
          />
        </InputGroup>
        {formData.tipoComprador === "Pessoa_juridica" ? (
          <InputGroup className="mb-3">
            <InputGroup.Text>CNPJ</InputGroup.Text>
            <Form.Control
              placeholder="Seu CNPJ"
              name="cnpj"
              onChange={handleChange}
              value={formData.snpj}
            />
          </InputGroup>
        ) : (
          <InputGroup className="mb-3">
            <InputGroup.Text>CPF</InputGroup.Text>
            <Form.Control
              placeholder="Seu CPF"
              name="cpf"
              onChange={handleChange}
              value={formData.cpf}
            />
          </InputGroup>
        )}

        <InputGroup className="mb-3">
          <InputGroup.Text>E-mail</InputGroup.Text>
          <Form.Control
            placeholder="Seu e-mail"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </InputGroup>
        <div className="grid grid-cols-2 gap-2 w-full items-center">
          <InputGroup className="mb-3 ">
            <InputGroup.Text>Telefone</InputGroup.Text>
            <Form.Control
              placeholder="Seu telefone"
              name="telefone"
              onChange={handleChange}
              value={formData.telefone}
            />
          </InputGroup>

          <Form.Select
            className="mb-3 w-fit"
            size="sm"
            name="meioContato"
            onChange={handleChange}
            value={formData.meioContato}>
            <option value="">Meio de contato</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">E-mail</option>
            <option value="ligacao">Ligação</option>
          </Form.Select>
        </div>
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
};

export default RegisterCar;
