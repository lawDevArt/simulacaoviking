import { useState } from "react";
import "./App.css";
import { Button, TextField } from "@mui/material";
import InsetDividers from "./SelectEvento";

function App() {
  const eventos = ["Guerra", "Família", "Local"];
  const [lugar, setLugar] = useState("");
  const [name, setName] = useState("");
  const [eventosArray, setEventosArray] = useState([]);
  const eventosImpossiveis = ["Família"];
  const statusViking = [
    { nome: "Força", valor: 80 },
    { nome: "Respeito", valor: 60 },
    { nome: "Coragem", valor: 70 },
    { nome: "Inteligência", valor: 50 },
    { nome: "Habilidade com espada", valor: 90 },
    { nome: "Habilidade com arco", valor: 40 },
  ];

  function calculaOverall(status) {
    const total = status.reduce(
      (acumulador, item) => acumulador + item.valor,
      0
    );
    return total / status.length;
  }

  const overall = calculaOverall(statusViking);

  function handleClickLugar(item) {
    setLugar(item);
  }

  function sortearEventos() {
    let eventos = ["Guerra", "Espedição", "Invasão", "local"];
    const eventoAleatorio = lugar;

    if (eventoAleatorio == "Guerra") {
      eventos = [
        {
          descricao: "Todos soldados fiquem em prontidão",
          chance: 10,
          detalhes:
            "Um rumor sobre um possível ataque inimigo está se espalhando.",
          
        },
        {
          descricao: "Ataque surpresa",
          chance: 20,
          detalhes:
            "Os inimigos atacaram de surpresa durante a noite, causando grandes baixas.",
        },
        {
          descricao: "Viajaremos até algum terreno",
          chance: 30,
          detalhes:
            "Os líderes da aldeia decidiram que é hora de explorar um novo terreno em busca de recursos.",
        },
        {
          descricao: "Nada de interessante aconteceu hoje",
          chance: 10,
          detalhes: "Um dia comum na aldeia, sem eventos notáveis.",
        },
        {
          descricao: "Construção de uma nova muralha",
          chance: 30,
          detalhes:
            "A aldeia está construindo uma nova muralha para se proteger de possíveis invasões.",
        },
      ];
      function escolherEventoAleatorio() {
        let somaChances = eventos.reduce(
          (soma, evento) => soma + evento.chance,
          0
        );
        let numeroAleatorio = Math.random() * somaChances;

        for (let evento of eventos) {
          numeroAleatorio -= evento.chance;
          if (numeroAleatorio <= 0) {
            setEventosArray([evento]);
            return evento.descricao;
          }
        }
        return null;
      }
      escolherEventoAleatorio();
    }

    if (eventoAleatorio == "Espedição") {
      eventos = [
        {
          descricao: "Avistamos uma ilha desconhecida à distância",
          chance: 20,
          resultado: "ilha",
        },
        {
          descricao: "Ventos fortes nos empurram para o leste",
          chance: 25,
          resultado: "continuar",
        },
        {
          descricao: "Pescamos uma grande quantidade de peixes frescos",
          chance: 15,
          resultado: "continuar",
        },
        {
          descricao: "Encontramos um navio inimigo no horizonte",
          chance: 20,
          resultado: "batalha",
        },
        {
          descricao: "Descobrimos uma nova rota comercial",
          chance: 10,
          resultado: "continuar",
        },
        {
          descricao: "Nada de interessante aconteceu hoje",
          chance: 10,
          resultado: "continuar",
        },
      ];

      function escolherEventoAleatorio() {
        let somaChances = eventos.reduce(
          (soma, evento) => soma + evento.chance,
          0
        );
        let numeroAleatorio = Math.random() * somaChances;

        for (let evento of eventos) {
          numeroAleatorio -= evento.chance;
          if (numeroAleatorio <= 0) {
            console.log(evento.descricao);
            return evento.descricao;
          }
        }
        return null;
      }
      escolherEventoAleatorio();
    }
    console.log(
      "🚀 ~ file: App.js:116 ~ sortearEventos ~ eventosArray:",
      eventosArray
    );
  }

  function EventosComEscolhas() {
    const Espedicao = [
      {
        descricao:
          "Você avista um grupo de aldeões locais. Eles parecem amigáveis. O que você faz?",
        escolhas: [
          {
            texto: "Aproximar-se para fazer amizade",
            respeito:
              "Os aldeões lhe oferecem uma bebida forte e te contam histórias sobre a ilha.",
          },
          {
            texto: "Manter distância e observá-los",
            inteligencia: 10,
            resultado:
              "Você aprende um pouco sobre o comportamento dos aldeões locais, mas nada além disso.",
          },
          {
            texto: "Atacar antes que eles possam atacar você",
            inteligencia: -10,
            habesp: 10,
            resultado:
              "Os aldeões lutam ferozmente para se defender e você acaba perdendo alguns homens.",
          },
        ],
      },
      {
        descricao: "Você encontra um baú com um cadeado. O que você faz?",
        escolhas: [
          {
            texto: "Tentar arrombar o cadeado",
            resultado:
              "O cadeado resiste aos seus esforços e você não consegue abri-lo.",
          },
          {
            texto: "Procurar uma chave",
            resultado:
              "Você não encontra uma chave, mas consegue algumas moedas de ouro escondidas nas proximidades.",
          },
          {
            texto: "Ignorar o baú e seguir em frente",
            resultado:
              "Você perde a oportunidade de encontrar um tesouro valioso.",
          },
        ],
      },
      {
        descricao:
          "Você avista um navio inimigo se aproximando. O que você faz?",
        escolhas: [
          {
            texto: "Preparar-se para a batalha",
            resultado:
              "A batalha é difícil, mas você e sua tripulação saem vitoriosos.",
          },
          {
            texto: "Fingir que é apenas um navio amigo",
            resultado:
              "Você consegue enganar o navio inimigo e eles seguem em frente.",
          },
          {
            texto: "Fugir para a ilha próxima",
            resultado:
              "Você consegue escapar do navio inimigo, mas perde tempo valioso na ilha.",
          },
        ],
      },
    ];

    const eventoAleatorio = eventos[Math.floor(Math.random() * eventos.length)];
    const escolhaAleatoria =
      eventoAleatorio.escolhas[
        Math.floor(Math.random() * eventoAleatorio.escolhas.length)
      ];

    console.log(eventoAleatorio.descricao);
    console.log("Escolha:");
    console.log(escolhaAleatoria.texto);
    console.log("Resultado:");
    console.log(escolhaAleatoria.resultado);
  }

  function gerarEventoAleatorio(e) {
    const numeroAleatorio = Math.random(); // número aleatório entre 0 e 1
    let probabilidadeCumulativa = 0;

    for (let i = 0; i < e.length; i++) {
      probabilidadeCumulativa += e[i].chance;
      if (numeroAleatorio <= probabilidadeCumulativa) {
        console.log("EV AQUUI", e[i]);
        return e[i];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <h1>Overall: {overall}</h1>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></TextField>
      {eventos.map((item) => (
        <Button onClick={() => handleClickLugar(item)}>{item}</Button>
      ))}
      <div>
        <InsetDividers {...{ sortearEventos, eventosArray }} />
      </div>
    </div>
  );
}

export default App;
