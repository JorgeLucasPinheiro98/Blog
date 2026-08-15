import type { Post } from "../types/Post";

const muckResponse: Post[] = [
    {
      id: "1",
      titulo: "Obras de revitalização da Praça Central avançam para fase final",
      slug: "obras-revitalizacao-praca-central-avancam-fase-final",
      resumo: "Projeto inclui nova iluminação em LED, paisagismo renovado e espaço para feirantes locais.",
      conteudo: "As obras de revitalização na Praça Central estão em ritmo acelerado. Segundo a secretaria de infraestrutura, a instalação das novas luminárias de LED foi concluída e a etapa atual foca no assentamento do novo piso e paisagismo. A expectativa é que o espaço seja entregue à comunidade até o fim deste mês.",
      imagem: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      data: "2026-08-11T08:30:00Z",
      categoria: "cidade"
    },
    {
      id: "2",
      titulo: "Inscrições abertas para o Campeonato Amador de Futebol de Piracanjuba",
      slug: "inscricoes-abertas-campeonato-amador-futebol-piracanjuba",
      resumo: "Times da cidade e região podem se inscrever gratuitamente até a próxima sexta-feira.",
      conteudo: "A Secretaria Municipal de Esportes confirmou o início do Campeonato Amador local. As equipes interessadas em participar devem enviar a documentação dos atletas até sexta-feira. Haverá premiação em troféus e dinheiro para os três primeiros colocados.",
      imagem: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
      data: "2026-08-10T14:15:00Z",
      categoria: "esportes"
    },
    {
      id: "3",
      titulo: "Manutenção programada na rede de água pode afetar bairros nesta quarta",
      slug: "manutencao-programada-rede-agua-afeta-bairros-quarta",
      resumo: "Abastecimento será interrompido temporariamente das 08h às 14h para trocas de tubulação.",
      conteudo: "A companhia de saneamento informa que haverá interrupção temporária no fornecimento de água no Setor Sul e adjacências nesta quarta-feira. O motivo é uma manutenção preventiva na rede distribuidora. A orientação é que os moradores economizem água no período.",
      imagem: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
      data: "2026-08-10T11:00:00Z",
      categoria: "publico"
    },
    {
      id: "4",
      titulo: "Tradicional Feira Gastronômica e Cultural acontece neste fim de semana",
      slug: "tradicional-feira-gastronomica-cultural-acontece-fim-de-semana",
      resumo: "Evento contará com barracas de comidas típicas, artesanato regional e shows ao vivo.",
      conteudo: "No próximo sábado e domingo, a feira gastronômica promete movimentar o turismo local. O público poderá conferir pratos tradicionais da culinária goiana, apresentações de artistas locais e exposição de artesanato feito por produtores da região.",
      imagem: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
      data: "2026-08-09T18:45:00Z",
      categoria: "eventos"
    },
    {
      id: "5",
      titulo: "Prefeitura publica edital de concurso público com vagas para diversos níveis",
      slug: "prefeitura-publica-edital-concurso-publico-vagas-diversos-niveis",
      resumo: "Oportunidades contemplam cargos de nível fundamental, médio e superior.",
      conteudo: "Foi publicado o edital do novo concurso público municipal. As oportunidades estão divididas entre cargos administrativos, área da saúde e educação. As inscrições começam no próximo mês diretamente pelo site da banca organizadora.",
      imagem: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800",
      data: "2026-08-08T09:20:00Z",
      categoria: "publico"
    },
    {
      id: "6",
      titulo: "Produtores rurais da região se reúnem para workshop sobre agricultura sustentável",
      slug: "produtores-rurais-regiao-reunem-workshop-agricultura-sustentavel",
      resumo: "Encontro debateu técnicas de manejo de solo e uso eficiente da água na lavoura.",
      conteudo: "Especialistas e produtores rurais do município se reuniram para debater inovações no campo. O foco principal foi o uso de tecnologia para otimização do plantio, redução de insumos químicos e preservação de nascentes.",
      imagem: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
      data: "2026-08-07T16:10:00Z",
      categoria: "regiao"
    },
    {
      id: "7",
      titulo: "Campanha de vacinação contra a gripe é prorrogada no posto de saúde central",
      slug: "campanha-vacinacao-gripe-prorrogada-posto-saude-central",
      resumo: "Todas as faixas etárias a partir de 6 meses agora podem receber a dose da vacina.",
      conteudo: "A Secretaria de Saúde estendeu o prazo da campanha de vacinação contra a gripe. O atendimento ocorre de segunda a sexta-feira, das 07h às 17h, no Posto de Saúde Central. É necessário apresentar documento com foto e cartão de vacina.",
      imagem: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800",
      data: "2026-08-06T13:00:00Z",
      categoria: "publico"
    },
    {
      id: "8",
      titulo: "Escola municipal ganha novo laboratório de informática com computadores modernos",
      slug: "escola-municipal-ganha-novo-laboratorio-informatica",
      resumo: "Espaço vai atender mais de 400 alunos com aulas práticas de tecnologia e programação básica.",
      conteudo: "Foi inaugurado o novo laboratório de informática da rede municipal. Equipado com 25 computadores modernos, o espaço visa conectar os alunos a ferramentas digitais e ao aprendizado de lógica de programação desde os primeiros anos escolares.",
      imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      data: "2026-08-05T10:40:00Z",
      categoria: "cidade"
    },
    {
      id: "9",
      titulo: "Atletas locais se destacam e conquistam medalhas na corrida de rua regional",
      slug: "atletas-locais-destacam-conquistam-medalhas-corrida-rua-regional",
      resumo: "Equipe do município garantiu posições no pódio nas categorias de 5km e 10km.",
      conteudo: "Os corredores que representaram a cidade na maratona regional voltaram para casa com excelentes resultados. Três atletas locais conquistaram o primeiro e segundo lugar em suas respectivas categorias de idade.",
      imagem: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800",
      data: "2026-08-04T15:50:00Z",
      categoria: "esportes"
    },
    {
      id: "10",
      titulo: "Cineclube exibe documentário gratuito sobre a história e cultura da cidade",
      slug: "cineclube-exibe-documentario-gratuito-historia-cultura-cidade",
      resumo: "Sessão especial acontecerá no auditório municipal com direito a debate no final.",
      conteudo: "O projeto Cineclube promove nesta quinta-feira a exibição do documentário que retrata a história e o desenvolvimento cultural do município. A entrada é gratuita e sujeita à lotação do auditório.",
      imagem: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      data: "2026-08-03T19:00:00Z",
      categoria: "eventos"
    }
  ];

const getResponse: Post[] = [];


export const response = getResponse || muckResponse;