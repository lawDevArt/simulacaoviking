import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import imperiodejade from "./imagens/reino1.jpg";
import imperiodeferro from "./imagens/reino2.jpg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

const empires = [
  {
    name: "Império de Jade",
    imagem: imperiodejade,
    advantages: [
      "Comércio de especiarias exóticas em grande escala",
      "Tecnologia avançada de navegação marítima",
      "Cultura refinada e artesãos habilidosos",
    ],
  },
  {
    name: "Império de Ferro",
    advantages: [
      "Amplas reservas de minério de ferro e carvão",
      "Eficiente produção em massa de armas e equipamentos",
      "Exército disciplinado e bem treinado",
    ],
  },
  {
    name: "Império de Ouro",
    advantages: [
      "Ricas minas de ouro e prata",
      "Mão de obra escrava barata",
      "Habilidade em finanças e comércio internacional",
    ],
  },
  {
    name: "Império do Fogo",
    advantages: [
      "Domínio do fogo e uso eficiente da energia térmica",
      "Desenvolvimento de tecnologia avançada de combustão",
      "Exército com armas de fogo altamente eficazes",
    ],
  },
  {
    name: "Império de Esmeralda",
    advantages: [
      "Riqueza em minerais e pedras preciosas",
      "Técnicas avançadas de mineração e metalurgia",
      "Força militar altamente treinada e equipada",
      "Criação de artefatos mágicos",
    ],
  },
  {
    name: "Império de Cristal",
    advantages: [
      "Domínio da tecnologia de refração da luz",
      "Habilidade em criar lentes e espelhos avançados",
      "Desenvolvimento de armas de longo alcance altamente precisas",
      "Cultura altamente sofisticada e filosofia elevada",
    ],
  },
];

const EmpireList = ({ onEmpireSelected }) => {
  return (
    <div>
      <h2>Escolha um império:</h2>
      <ul>
        {empires.map((empire, index) => (
          <div>
            <Card sx={{ maxWidth: 345 }} key={index}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={empire.imagem}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {empire.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>Vantagens:</p>
                  <h1>
                    {empire.advantages.map((advantage, index) => (
                      <Typography key={index}>{advantage}</Typography>
                    ))}
                  </h1>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => onEmpireSelected(empire)}>
                  Escolher
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

const EmpireDetails = ({ empire }) => {
  return (
    <div>
      <h2>{empire.name}</h2>
      <p>Vantagens:</p>
      <ul>
        {empire.advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
    </div>
  );
};

const EmpireSelector = () => {
  const [selectedEmpire, setSelectedEmpire] = useState(null);

  const handleEmpireSelected = (empire) => {
    setSelectedEmpire(empire);
  };

  return (
    <div>
      {!selectedEmpire && (
        <EmpireList onEmpireSelected={handleEmpireSelected} />
      )}
      {selectedEmpire && <EmpireDetails empire={selectedEmpire} />}
    </div>
  );
};

export default EmpireSelector;
