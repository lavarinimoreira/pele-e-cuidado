
import { useState } from "react";
import "./App.css";

const questions = [
  {
    title: "Como sua pele costuma ficar algumas horas depois de lavar o rosto?",
    options: [
      "Fica brilhando e com bastante oleosidade",
      "Fica oleosa principalmente na testa, nariz e queixo",
      "Fica confortável, sem muito brilho ou ressecamento",
      "Fica repuxando ou com sensação de ressecamento",
      "Fica desconfortável, irritada ou muito sensível",
    ],
  },
  {
    title: "Como você descreveria a aparência dos seus poros?",
    options: [
      "Bem aparentes, principalmente no nariz e nas bochechas",
      "Mais aparentes na região do nariz e testa",
      "Pouco aparentes",
      "Quase não consigo perceber",
      "Variam bastante e às vezes parecem mais evidentes",
    ],
  },
  {
    title: "Com que frequência sua pele apresenta espinhas ou cravos?",
    options: [
      "Frequentemente, tenho muitas espinhas e/ou cravos",
      "Às vezes aparecem algumas espinhas e cravos",
      "Principalmente alguns cravos",
      "Raramente tenho",
      "Quase nunca tenho",
    ],
  },
  {
    title: "Como sua pele reage quando você usa um produto novo?",
    options: [
      "Normalmente não tenho nenhuma reação",
      "Às vezes fico com vermelhidão ou ardência",
      "Minha pele costuma arder, coçar ou ficar vermelha facilmente",
      "Costuma ficar mais oleosa ou apresentar espinhas",
      "Costuma ficar ressecada ou descamando",
    ],
  },
  {
    title: "Você sente sua pele repuxar ou descascar depois de lavar o rosto?",
    options: [
      "Nunca",
      "Raramente",
      "Às vezes",
      "Frequentemente",
      "Sempre",
    ],
  },
  {
    title: "Ao longo do dia, qual situação mais incomoda você na sua pele?",
    options: [
      "Excesso de oleosidade e brilho",
      "Espinhas e cravos",
      "Ressecamento e descamação",
      "Vermelhidão ou sensibilidade",
      "Nada específico, quero apenas manter a pele saudável",
    ],
  },
  {
    title: "Como ficam suas bochechas em comparação com a testa e o nariz?",
    options: [
      "Também ficam bastante oleosas",
      "São normais, enquanto testa e nariz ficam oleosos",
      "São mais secas que o restante do rosto",
      "Ficam ressecadas e/ou sensíveis facilmente",
      "Não percebo diferença entre as regiões",
    ],
  },
  {
    title: "Você possui manchas ou marcas que gostaria de melhorar?",
    options: [
      "Sim, principalmente marcas de espinhas",
      "Sim, manchas causadas pelo sol",
      "Sim, tenho algumas manchas, mas não sei a causa",
      "Poucas e não me incomodam muito",
      "Não tenho manchas que me incomodem",
    ],
  },
  {
    title: "O que você mais gostaria de melhorar na sua pele atualmente?",
    options: [
      "Controlar a oleosidade e o brilho",
      "Diminuir espinhas e cravos",
      "Melhorar o ressecamento e deixar a pele mais hidratada",
      "Diminuir sensibilidade, vermelhidão ou irritação",
      "Melhorar a aparência geral e manter a pele saudável",
    ],
  },
  {
    title: "Como é sua rotina atual de cuidados com a pele?",
    options: [
      "Quase não uso produtos",
      "Uso apenas sabonete e/ou hidratante",
      "Uso sabonete, hidratante e protetor solar",
      "Uso vários produtos, mas não sei exatamente quais são ideais para minha pele",
      "Tenho uma rotina completa e sei quais produtos funcionam para mim",
    ],
  },
];

const products = {
  oleosa: {
    name: "Pele oleosa / com tendência à acne",
    subtitle: "Equilíbrio, limpeza e controle da oleosidade",
    description:
      "Sua pele apresenta características de oleosidade ou tendência à acne. Uma rotina leve pode ajudar a manter a pele limpa, hidratada e protegida.",
    cleanser: [
      "CeraVe Gel de Limpeza Espumante",
      "Actine Sabonete Líquido",
    ],
    moisturizer: [
      "Neutrogena Hydro Boost Water Gel",
      "CeraVe Loção Facial Oil Control",
    ],
    sunscreen: [
      "Episol SEC OC",
      "ISDIN Fusion Water",
    ],
    treatment: [
      "Principia Ácido Salicílico 2%",
      "Adcos Derma Complex Ácido Salicílico",
    ],
    routine: [
      "Lave o rosto com um produto suave.",
      "Aplique hidratante de textura leve.",
      "Finalize com protetor solar pela manhã.",
      "Introduza tratamentos para acne gradualmente.",
    ],
    note:
      "Para acne inflamatória intensa, dolorosa ou persistente, procure avaliação dermatológica.",
  },
  seca: {
    name: "Pele seca",
    subtitle: "Hidratação, conforto e proteção da barreira cutânea",
    description:
      "Sua pele apresenta características de ressecamento. Produtos suaves e hidratantes podem ajudar a melhorar o conforto e reduzir a sensação de repuxamento.",
    cleanser: [
      "CeraVe Loção de Limpeza Hidratante",
      "Cetaphil Loção de Limpeza",
    ],
    moisturizer: [
      "CeraVe Creme Hidratante",
      "Cetaphil Creme Hidratante",
    ],
    sunscreen: [
      "La Roche-Posay Anthelios, com hidratação adequada",
      "ISDIN Fusion Water",
    ],
    treatment: [
      "Priorize a hidratação e a manutenção da barreira cutânea.",
      "Evite esfoliação excessiva se houver ressecamento.",
    ],
    routine: [
      "Use um limpador suave, sem sensação de pele repuxando.",
      "Aplique um hidratante mais nutritivo.",
      "Use protetor solar diariamente.",
      "Reaplique o hidratante quando necessário.",
    ],
    note:
      "Se houver descamação persistente, coceira ou irritação, procure orientação dermatológica.",
  },
  sensivel: {
    name: "Pele sensível",
    subtitle: "Suavidade, hidratação e cuidado diário",
    description:
      "Sua pele pode apresentar maior reatividade a produtos ou fatores externos. Uma rotina simples, com poucos produtos, pode facilitar a identificação de possíveis irritantes.",
    cleanser: [
      "Cetaphil Loção de Limpeza Suave",
      "Bioderma Sensibio Gel",
    ],
    moisturizer: [
      "Bioderma Sensibio Defensive",
      "CeraVe Loção Facial Hidratante",
    ],
    sunscreen: [
      "La Roche-Posay Anthelios",
      "Bioderma Photoderm",
    ],
    treatment: [
      "Prefira produtos suaves e introduza novidades uma de cada vez.",
      "Evite iniciar vários ativos ao mesmo tempo.",
    ],
    routine: [
      "Limpe o rosto delicadamente, sem esfregar.",
      "Aplique hidratante adequado à sua pele.",
      "Use protetor solar diariamente.",
      "Observe a tolerância antes de adicionar novos produtos.",
    ],
    note:
      "Ardência frequente, vermelhidão persistente ou reações intensas merecem avaliação dermatológica.",
  },
  mista: {
    name: "Pele mista",
    subtitle: "Equilíbrio entre as diferentes regiões do rosto",
    description:
      "Sua pele pode apresentar mais oleosidade na zona T (testa, nariz e queixo) e características normais ou secas em outras regiões.",
    cleanser: [
      "CeraVe Gel de Limpeza Espumante",
      "Bioderma Sébium Gel",
    ],
    moisturizer: [
      "Neutrogena Hydro Boost Water Gel",
      "CeraVe Loção Facial",
    ],
    sunscreen: [
      "ISDIN Fusion Water",
      "La Roche-Posay Anthelios Airlicium",
    ],
    treatment: [
      "Ajuste a quantidade de hidratante conforme cada região.",
      "Se necessário, use tratamentos específicos apenas nas áreas indicadas.",
    ],
    routine: [
      "Use um limpador suave adequado à sua pele.",
      "Aplique hidratante leve, reforçando nas áreas mais secas.",
      "Finalize com protetor solar pela manhã.",
      "Evite ressecar as regiões que já são naturalmente secas.",
    ],
    note:
      "A pele mista também pode ser sensível. Se houver irritação, simplifique a rotina.",
  },
};


function classifySkin(answers) {
  const scores = {
    oleosa: 0,
    seca: 0,
    sensivel: 0,
    mista: 0,
  };

  const add = (type, points) => {
    scores[type] += points;
  };

  // Q1: comportamento após a limpeza
  switch (answers[0]) {
    case 0:
      add("oleosa", 3);
      break;
    case 1:
      add("mista", 3);
      break;
    case 2:
      add("mista", 2);
      break;
    case 3:
      add("seca", 3);
      break;
    case 4:
      add("sensivel", 3);
      break;
  }

  // Q2: aparência dos poros
  switch (answers[1]) {
    case 0:
      add("oleosa", 2);
      break;
    case 1:
      add("mista", 2);
      break;
    case 2:
      add("seca", 1);
      add("mista", 1);
      break;
    case 3:
      add("seca", 1);
      add("mista", 1);
      break;
    case 4:
      add("mista", 2);
      break;
  }

  // Q3: acne e cravos
  switch (answers[2]) {
    case 0:
      add("oleosa", 3);
      break;
    case 1:
      add("oleosa", 2);
      break;
    case 2:
      add("oleosa", 1);
      break;
    case 3:
      add("mista", 1);
      break;
    case 4:
      add("mista", 1);
      break;
  }

  // Q4: reação a produtos novos
  switch (answers[3]) {
    case 0:
      add("mista", 1);
      break;
    case 1:
      add("sensivel", 2);
      break;
    case 2:
      add("sensivel", 4);
      break;
    case 3:
      add("oleosa", 2);
      break;
    case 4:
      add("seca", 2);
      break;
  }

  // Q5: repuxamento e descamação
  switch (answers[4]) {
    case 0:
      add("mista", 1);
      break;
    case 1:
      add("mista", 1);
      break;
    case 2:
      add("seca", 1);
      break;
    case 3:
      add("seca", 2);
      break;
    case 4:
      add("seca", 3);
      break;
  }

  // Q6: principal incômodo
  switch (answers[5]) {
    case 0:
      add("oleosa", 3);
      break;
    case 1:
      add("oleosa", 2);
      break;
    case 2:
      add("seca", 3);
      break;
    case 3:
      add("sensivel", 3);
      break;
    case 4:
      add("mista", 2);
      break;
  }

  // Q7: diferenças entre as regiões do rosto
  switch (answers[6]) {
    case 0:
      add("oleosa", 2);
      break;
    case 1:
      add("mista", 4);
      break;
    case 2:
      add("mista", 2);
      add("seca", 1);
      break;
    case 3:
      add("sensivel", 2);
      add("seca", 1);
      break;
    case 4:
      add("mista", 2);
      break;
  }

  // Q8: manchas
  // Não determina diretamente o tipo de pele.
  // Por isso, não altera a pontuação.

  // Q9: objetivo principal
  switch (answers[8]) {
    case 0:
    case 1:
      add("oleosa", 2);
      break;
    case 2:
      add("seca", 2);
      break;
    case 3:
      add("sensivel", 2);
      break;
    case 4:
      add("mista", 2);
      break;
  }

  // Q10: rotina atual
  // Ajuda a entender os hábitos, mas não define
  // diretamente o tipo de pele.

  const sorted = Object.entries(scores).sort(
    (a, b) => b[1] - a[1]
  );

  const [first, second] = sorted;

  // Empates ou pontuações próximas
  if (first[1] - second[1] <= 1) {
    const pair = [first[0], second[0]];

    if (
      pair.includes("sensivel") &&
      pair.includes("seca")
    ) {
      return "sensivel";
    }

    if (
      pair.includes("oleosa") &&
      pair.includes("mista")
    ) {
      return "mista";
    }
  }

  return first[0];
}

function App() {
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);

  const selected = answers[current];
  const progress = finished
    ? 100
    : ((current + 1) / questions.length) * 100;

  const handleSelect = (optionIndex) => {
    setAnswers((previous) => ({
      ...previous,
      [current]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (selected === undefined) return;

    if (current < questions.length - 1) {
      setCurrent((previous) => previous + 1);
    } else {
      setFinished(true);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent((previous) => previous - 1);
    }
  };

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
  };

  const result = finished
    ? products[classifySkin(answers)]
    : null;

  return (
    <main className="app">
      <header className="topbar">
        <a href="#" className="brand" onClick={restart}>
          <span className="brand-mark">P.</span>
          <span>PELE & CUIDADO</span>
        </a>
        <span className="topbar-label">GUIA DE SKINCARE</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            SUA PELE, SEU CUIDADO
          </span>

          <h1>
            Descubra
            <br />
            sua <em>pele.</em>
          </h1>

          <p>
            Responda algumas perguntas e descubra
            uma rotina de cuidados pensada para
            as características da sua pele.
          </p>

          <div className="hero-bottom">
            <span>10 PERGUNTAS</span>
            <span className="hero-separator" />
            <span>~ 3 MINUTOS</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-circle">
            <div className="art-sun" />
            <div className="art-leaf leaf-one" />
            <div className="art-leaf leaf-two" />
            <div className="art-leaf leaf-three" />
            <div className="art-leaf leaf-four" />
            <div className="art-stem" />
            <div className="art-bottle">
              <div className="bottle-cap" />
              <div className="bottle-neck" />
              <div className="bottle-body">
                <span>PELE</span>
                <strong>care.</strong>
                <small>daily ritual</small>
              </div>
            </div>
            <span className="art-caption">NATURE · BALANCE · CARE</span>
          </div>
          <span className="art-number">01 — 10</span>
        </div>
      </section>

      <section className="quiz-section" id="quiz">
        {!finished ? (
          <div className="quiz-card">
            <div className="quiz-top">
              <div>
                <span className="section-label">
                  ANÁLISE DA PELE
                </span>
                {/* <h2>Vamos começar?</h2> */}
              </div>

              <span className="question-count">
                <strong>
                  {String(current + 1).padStart(2, "0")}
                </strong>
                <span> / 10</span>
              </span>
            </div>

            <div
              className="progress-track"
              aria-label={`Pergunta ${current + 1} de 10`}
            >
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="question-area">
              <span className="question-number">
                PERGUNTA {String(current + 1).padStart(2, "0")}
              </span>

              <h3>{questions[current].title}</h3>
              <p className="question-hint">
                Selecione a alternativa que mais combina
                com você.
              </p>

              <div className="options">
                {questions[current].options.map(
                  (option, index) => (
                    <button
                      key={option}
                      type="button"
                      className={`option ${
                        selected === index ? "selected" : ""
                      }`}
                      onClick={() => handleSelect(index)}
                      aria-pressed={selected === index}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="option-text">
                        {option}
                      </span>
                      <span className="option-check">
                        {selected === index ? "✓" : ""}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="quiz-footer">
              <button
                type="button"
                className="back-button"
                onClick={handleBack}
                disabled={current === 0}
              >
                ← Voltar
              </button>

              <button
                type="button"
                className="next-button"
                onClick={handleNext}
                disabled={selected === undefined}
              >
                {current === 9
                  ? "Ver meu resultado"
                  : "Próxima pergunta"}
                <span>→</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="result-card">
            <div className="result-header">
              <span className="section-label">
                SUA ANÁLISE
              </span>
              <span className="result-badge">
                RESULTADO PERSONALIZADO
              </span>
            </div>

            <div className="result-intro">
              <div className="result-icon">✳</div>
              <div>
                <span className="question-number">
                  SEU TIPO DE PELE
                </span>
                <h2>{result.name}</h2>
                <p>{result.subtitle}</p>
              </div>
            </div>

            <p className="result-description">
              {result.description}
            </p>

            <div className="result-divider" />

            <div className="routine-heading">
              <span className="section-label">
                SUA ROTINA DE CUIDADOS
              </span>
              <h3>Cuide da sua pele, todos os dias.</h3>
            </div>

            <div className="product-list">
              <ProductSection
                number="01"
                title="Limpeza"
                description="Sabonete facial"
                items={result.cleanser}
              />
              <ProductSection
                number="02"
                title="Hidratação"
                description="Hidratante facial"
                items={result.moisturizer}
              />
              <ProductSection
                number="03"
                title="Proteção"
                description="Protetor solar"
                items={result.sunscreen}
              />
              <ProductSection
                number="04"
                title="Tratamento"
                description="Cuidados complementares"
                items={result.treatment}
              />
            </div>

            <div className="routine-box">
              <span className="section-label">
                PASSO A PASSO
              </span>
              <h3>Uma rotina simples</h3>

              <div className="routine-steps">
                {result.routine.map((step, index) => (
                  <div className="routine-step" key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="care-note">
              <span className="note-icon">✳</span>
              <div>
                <strong>Um cuidado a mais</strong>
                <p>{result.note}</p>
              </div>
            </div>

            <div className="result-disclaimer">
              Este resultado é educativo e baseado nas
              respostas fornecidas. Não substitui uma
              avaliação dermatológica. A tolerância e a
              compatibilidade dos produtos variam de pessoa
              para pessoa.
            </div>

            <button
              type="button"
              className="restart-button"
              onClick={restart}
            >
              ↻ Refazer minha análise
            </button>
          </div>
        )}
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">P.</span>
          <span>PELE & CUIDADO</span>
        </div>
        <p>Seu cuidado começa com você.</p>
        <span className="footer-copy">
          PROJETO ACADÊMICO FACSETE · 2026
        </span>
      </footer>
    </main>
  );
}

function ProductSection({
  number,
  title,
  description,
  items,
}) {
  return (
    <article className="product-section">
      <div className="product-number">{number}</div>
      <div className="product-content">
        <div className="product-title">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>

        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default App;