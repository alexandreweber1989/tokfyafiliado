import {
  Flame, ImageIcon, Clapperboard, PenLine, Mic, FolderKanban, FileText, ScanSearch,
  LayoutDashboard, GraduationCap, Trophy, Bookmark, ShoppingBag, Store, Building2,
  Camera, EyeOff, type LucideIcon,
} from "lucide-react";

/** Link de afiliado (Kirvano) usado em todos os botões de compra. */
export const KIRVANO_LINK = "https://kirvano.com.br/seu-link-de-afiliado-aqui";

export interface Item { icon: LucideIcon; t: string; d: string }

export const navLinks = [
  { name: "Recursos", href: "#recursos" },
  { name: "Para quem", href: "#para-quem" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Planos", href: "#planos" },
  { name: "Dúvidas", href: "#faq" },
] as const;

export const audiences: Item[] = [
  { icon: ShoppingBag, t: "Afiliados", d: "Encontre produtos em alta, crie vídeos e variações de anúncio sem comprar ou gravar o produto." },
  { icon: Store, t: "Lojistas", d: "Mostre ângulos e usos da mercadoria e crie campanhas para TikTok, Instagram e datas comemorativas." },
  { icon: Building2, t: "Agências", d: "Atenda vários clientes com anúncios em volume, variações de criativos e roteiros personalizados." },
  { icon: Camera, t: "Criadores de conteúdo", d: "Acelere a produção de vídeos, imagens, narrações e ideias para postar com constância." },
  { icon: EyeOff, t: "Quem não quer aparecer", d: "Use avatares, modelos de IA, mãos demonstrando produtos, cenas de uso e narração." },
];

export const features: Item[] = [
  { icon: Flame, t: "Produtos em alta", d: "Descubra itens com potencial de venda, tendências e o que outros afiliados estão divulgando." },
  { icon: Clapperboard, t: "Vídeos UGC com IA", d: "Vídeos que parecem recomendações reais: unboxing, antes e depois, problema e solução." },
  { icon: ImageIcon, t: "Geração de imagens", d: "Modelos usando roupas, cenários de uso, capas de vídeo, catálogos e anúncios." },
  { icon: PenLine, t: "Roteiros e copies", d: "Ganchos, legendas, CTAs, respostas a objeções e variações de abordagem." },
  { icon: Mic, t: "Narrações e vozes", d: "Gere locuções objetivas e naturais para os seus vídeos de venda." },
  { icon: FileText, t: "Transcrição", d: "Transforme vídeos e áudios em texto e descubra padrões em vídeos virais." },
  { icon: ScanSearch, t: "Análise de criativos", d: "Avaliação de gancho, benefício, prova e CTA com recomendações de melhoria." },
  { icon: Bookmark, t: "Referências", d: "Salve vídeos por link e monte um banco de ideias, ganchos e formatos." },
  { icon: FolderKanban, t: "Projetos", d: "Imagens, vídeos, prompts, roteiros e áudios de cada produto em um só lugar." },
  { icon: LayoutDashboard, t: "Gestão", d: "Organize contas, tarefas, campanhas e acompanhe a produção e os resultados." },
  { icon: GraduationCap, t: "Comunidade e cursos", d: "Aprenda TikTok Shop, copywriting, IA e social commerce com outros usuários." },
  { icon: Trophy, t: "TokPoints", d: "Missões, insígnias, ranking e recompensas enquanto você evolui na plataforma." },
];

export const steps = [
  { n: "01", t: "Escolha o produto", d: "Envie uma imagem, descreva o item, escolha um produto em alta ou use uma referência de vídeo." },
  { n: "02", t: "Defina o objetivo", d: "Apresentar, demonstrar, vender ou promover — cada vídeo com uma finalidade clara." },
  { n: "03", t: "Escolha o formato", d: "Vertical 9:16, duração curta, produto visível e narração objetiva para o celular." },
  { n: "04", t: "Gere e revise", d: "Confira cor, formato, mãos, texto e áudio antes de publicar. Depois, teste variações." },
];

export const examples = [
  { product: "Vestido", hook: "“Quer um visual elegante sem complicação?”", scenes: ["Mulher sem roupa elegante", "Apresentação do vestido", "Mudança de visual", "Demonstração do caimento", "Chamada para comprar"] },
  { product: "Tablet", hook: "“Ainda tenta estudar e trabalhar só pelo celular?”", scenes: ["Estudando só pelo celular", "Apresentação do tablet", "Uso de teclado e mouse", "Demonstração da tela", "Chamada para compra"] },
];

export const analysis = [
  { k: "Gancho", v: "forte", ok: true },
  { k: "Produto", v: "aparece tarde", ok: false },
  { k: "Benefício", v: "pouco claro", ok: false },
  { k: "CTA", v: "fraco", ok: false },
];

export const plans = [
  { name: "Mensal", price: "R$ 97/mês", desc: "Para começar a criar e testar produtos.", items: ["Vídeos de até 8 segundos", "Resolução 720p", "Ferramentas de criação com IA", "TokPoints conforme o pacote"], popular: false },
  { name: "Anual", price: "R$ 67/mês", desc: "Para quem produz em volume e quer mais qualidade.", items: ["Vídeos de até 30 segundos", "Resolução de até 1080p", "Recursos extras da plataforma", "TokPoints conforme o pacote"], popular: true },
];

export const payments = [
  { label: "Pix", hint: "À vista e imediato" },
  { label: "Cartão de crédito", hint: "Em até 12x" },
];

export const guarantee = "Garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro.";

export const testimonials = [
  {
    name: "Carla M.",
    role: "Afiliada TikTok Shop",
    avatar: "https://i.pravatar.cc/150?u=carla",
    quote: "Fiz 15 variações de criativos em 20 minutos pro TikTok Shop e escalei o produto sem gravar nada.",
    result: "+3x de conversão",
  },
  {
    name: "Renato S.",
    role: "Lojista de moda",
    avatar: "https://i.pravatar.cc/150?u=renato",
    quote: "Coloquei a foto da peça, a Tokfy gerou o vídeo 9:16 com narração e publiquei no mesmo dia.",
    result: "Venda recorrente",
  },
  {
    name: "Juliana P.",
    role: "Agência de tráfego",
    avatar: "https://i.pravatar.cc/150?u=juliana",
    quote: "Atendo vários clientes com variações de criativos em volume. Economizei dias de edição.",
    result: "-80% de tempo",
  },
];

export const trustBadges = [
  { label: "Kirvano", desc: "Pagamento seguro" },
  { label: "SSL", desc: "Conexão criptografada" },
  { label: "7 dias", desc: "Garantia incondicional" },
];

export const fitYes = ["Produz muitos vídeos", "Trabalha com TikTok Shop", "É afiliado", "Não quer aparecer", "Precisa testar vários produtos", "Quer centralizar ferramentas"];
export const fitNo = ["Produz poucos vídeos", "Prefere gravação real", "Espera vendas automáticas", "Precisa de demonstrações extremamente precisas"];

export const faqs = [
  { q: "O que é a Tokfy?", a: "Uma plataforma de criação de conteúdo com IA para TikTok Shop, afiliados e social commerce. Ela transforma uma ideia, foto ou descrição de produto em vídeos, imagens, roteiros e narrações prontos para as redes." },
  { q: "Preciso aparecer nos vídeos?", a: "Não. Você pode usar avatares, modelos gerados por IA, mãos demonstrando produtos, cenas de uso, narração, texto e imagens." },
  { q: "Qual a diferença entre o plano mensal e o anual?", a: "Segundo o site, o mensal gera vídeos de até 8 segundos em 720p; o anual, vídeos de até 30 segundos em até 1080p, além de outros recursos. As condições podem mudar, então confira antes de assinar." },
  { q: "O que são TokPoints?", a: "São os pontos da plataforma, ligados a geração de conteúdo, pacotes de créditos, missões e recompensas. A quantidade varia conforme o plano ou pacote." },
  { q: "A Tokfy garante vendas?", a: "Não. Vendas dependem do produto, preço, oferta, comissão, público e constância. A Tokfy acelera a criação; estratégia, testes e análise de métricas continuam com você." },
  { q: "Preciso revisar o que a IA gera?", a: "Sim. A IA pode alterar cor, formato ou detalhes do produto. Revise cada imagem e vídeo e confirme que a promessa corresponde ao produto real." },
  { q: "Como é feita a compra?", a: "A assinatura e a entrega são processadas pela Kirvano, plataforma segura de pagamentos de produtos digitais." },
];
