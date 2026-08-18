create schema database_blog;

create table database_blog.posts (
    id_posts serial primary key,
    titulo text,
    slug text,
    resumo text,
    conteudo text,
    imagem text,
    data text,
    categoria text
)

INSERT INTO database_blog.posts (titulo, slug, resumo, conteudo, imagem, data, categoria) VALUES
(
    'Inscrições abertas para o Campeonato Amador de Futebol de Piracanjuba',
    'inscricoes-abertas-campeonato-amador-futebol-piracanjuba',
    'Times da cidade e região podem se inscrever gratuitamente até a próxima sexta-feira.',
    'A Secretaria Municipal de Esportes confirmou o início do Campeonato Amador local. As equipes interessadas em participar devem enviar a documentação dos atletas até sexta-feira. Haverá premiação em troféus e dinheiro para os três primeiros colocados.',
    'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800',
    '2026-08-10T14:15:00Z',
    'esportes'
),
(
    'Reforma da Praça Central entra na fase final de acabamento',
    'reforma-da-praca-central-entra-na-fase-final',
    'Novos bancos, iluminação em LED e paisagismo devem ser entregues no próximo mês.',
    'As obras de revitalização da Praça Central estão aceleradas. Nesta semana, as equipes iniciaram o plantio das mudas de árvores nativas do Cerrado e a instalação das novas luminárias de LED, garantindo mais segurança e lazer para as famílias locais.',
    'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800',
    '2026-08-11T09:30:00Z',
    'cidade'
),
(
    'Feira Gastronômica e Cultural reúne produtores locais neste final de semana',
    'feira-gastronomica-e-cultural-reune-produtores-locais',
    'Evento contará com pratos típicos da culinária goiana, artesanato e apresentações musicais ao vivo.',
    'Neste sábado e domingo, o espaço de eventos da cidade recebe mais uma edição da Feira Gastronômica. O público poderá apreciar pratos tradicionais como empadão goiano, galinhada e doces caseiros, além de prestigiar artistas da região.',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    '2026-08-12T18:00:00Z',
    'cultura'
),
(
    'Prefeitura anuncia mutirão de vacinação contra a Gripe e Dengue',
    'prefeitura-anuncia-mutirao-de-vacinacao',
    'Unidades Básicas de Saúde ficarão abertas neste sábado das 8h às 17h para atender toda a população.',
    'Para reforçar a imunização do município, a Secretaria de Saúde realiza neste sábado o Dia D de Vacinação. É necessário levar documento de identidade com foto, cartão do SUS e a caderneta de vacinação.',
    'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800',
    '2026-08-13T10:45:00Z',
    'saude'
),
(
    'Abertas as matrículas para cursos gratuitos de capacitação profissional em tecnologia',
    'cursos-gratuitos-capacitacao-profissional-tecnologia',
    'Vagas são voltadas para introdução à programação, lógica de desenvolvimento e informática básica.',
    'Estão abertas as inscrições para a nova turma de cursos técnicos gratuitos. Com carga horária de 80 horas, as aulas abrangerão conceitos fundamentais de tecnologia e desenvolvimento de sistemas, focando na inserção de jovens no mercado de trabalho.',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    '2026-08-14T11:20:00Z',
    'educacao'
),
(
    'Produtores rurais da região participam de workshop sobre manejo sustentável no Cerrado',
    'produtores-rurais-participam-de-workshop-manejo-sustentavel',
    'Iniciativa aborda técnicas de conservação do solo e uso eficiente dos recursos hídricos.',
    'Engenheiros agrônomos e especialistas do setor reuniram-se com agricultores locais para discutir práticas sustentáveis no agronegócio. O encontro destacou o uso de tecnologias de irrigação inteligente e rotação de culturas.',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    '2026-08-15T15:00:00Z',
    'agronegocio'
),
(
    'Atletas locais se destacam na Corrida de Rua Estadual de Goiás',
    'atletas-locais-se-destacam-na-corrida-de-rua-estadual',
    'Corredores do município conquistaram pódio nas categorias de 5km e 10km.',
    'A delegação de atletismo da cidade obteve resultados expressivos no circuito estadual disputado no último domingo. Três atletas locais conquistaram medalhas, destacando o crescimento do esporte amador no município.',
    'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800',
    '2026-08-16T08:10:00Z',
    'esportes'
),
(
    'Exposição fotográfica resgata a história e patrimônio da arquitetura local',
    'exposicao-fotografica-resgata-historia-arquitetura-local',
    'Acervo com fotos históricas do século XX estará aberto para visitação pública no Museu Municipal.',
    'A exposição "Nossas Raízes" reúne mais de 100 fotografias históricas que retratam a evolução urbana e as tradições do município ao longo das décadas. A visitação é gratuita e segue aberta até o final do mês.',
    'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800',
    '2026-08-16T16:40:00Z',
    'cultura'
),
(
    'Processo Seletivo Simplificado abre vagas para cargos no setor público',
    'processo-seletivo-simplificado-abre-vagas-setor-publico',
    'Oportunidades são para contratação temporária em diversos níveis de escolaridade.',
    'Foi publicado o edital do Processo Seletivo Simplificado para preenchimento de vagas imediatas e formação de cadastro reserva na administração pública municipal. As inscrições devem ser realizadas exclusivamente pela internet.',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800',
    '2026-08-17T13:00:00Z',
    'noticias'
),
(
    'Avanços no desenvolvimento web: Como o TypeScript melhora a produtividade em projetos Node.js',
    'avancos-desenvolvimento-web-typescript-nodejs',
    'Entenda como a tipagem estática previne erros em tempo de compilação e otimiza a manutenção de software.',
    'No desenvolvimento de aplicações modernas, o uso do TypeScript aliado ao Node.js tem se tornado o padrão do mercado. A capacidade de identificar erros antes da execução e a melhoria na auto-completação de código aceleram a entrega de projetos robustos.',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    '2026-08-18T08:00:00Z',
    'tecnologia'
);