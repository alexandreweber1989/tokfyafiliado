import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  Rocket,
  Target,
  BarChart3,
  Users,
  Clock,
  Play,
  ArrowRight,
  Check,
  Crown,
  Layers,
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tokfy — Automação de vendas por WhatsApp com IA" },
      {
        name: "description",
        content:
          "Tokfy é a plataforma de automação de WhatsApp que ajuda você a vender mais, todos os dias, no piloto automático. Assine agora e comece a faturar.",
      },
      { property: "og:title", content: "Tokfy — Venda mais pelo WhatsApp com IA" },
      {
        property: "og:description",
        content: "Automação de WhatsApp com inteligência para escalar suas vendas. Assine pela Kirvano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const KIRVANO_LINK =
  "https://kirvano.com.br/seu-link-de-afiliado-aqui";

const navLinks = [
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Planos", href: "#planos" },
  { name: "Perguntas", href: "#faq" },
];

const benefits = [
  {
    icon: Zap,
    t: "Disparo automático",
    d: "Envie mensagens para milhares de contatos sem ser bloqueado.",
  },
  {
    icon: ShieldCheck,
    t: "Proteção contra bloqueio",
    d: "Tecnologia que cuida dos seus números e mantém sua conta segura.",
  },
  {
    icon: BarChart3,
    t: "Métricas em tempo real",
    d: "Acompanhe abertas, cliques e vendas de cada campanha.",
  },
  {
    icon: Users,
    t: "Gestão de leads",
    d: "Organize contatos e funil de vendas em um só lugar.",
  },
  {
    icon: Clock,
    t: "Agendamento inteligente",
    d: "Programe envios para o horário em que seu público está online.",
  },
  {
    icon: Rocket,
    t: "Escalabilidade",
    d: "De 10 a 10.000 mensagens por dia com a mesma facilidade.",
  },
];

const steps = [
  { n: "01", t: "Assine o Tokfy", d: "Crie sua conta pela Kirvano em poucos minutos." },
  { n: "02", t: "Conecte o WhatsApp", d: "Vincule seu número e configure suas campanhas." },
  { n: "03", t: "Venda no piloto automático", d: "Dispara mensagens e fecha vendas enquanto você dorme." },
];

const testimonials = [
  { name: "Carla M.", role: "Diretora de marketing", text: "O Tokfy transformou minha operação. Vendas 3× maiores no primeiro mês.", stars: 5 },
  { name: "Ricardo S.", role: "Empreendedor digital", text: "Finalmente uma automação de WhatsApp que não bloqueia meus números.", stars: 5 },
  { name: "Fernanda L.", role: "Afiliada", text: "Muito fácil de usar. Suporte rápido e plataforma que entrega o que promete.", stars: 5 },
];

const faqs = [
  {
    q: "O que é o Tokfy?",
    a: "É uma plataforma de automação de WhatsApp com inteligência artificial, feita para empreendedores e afiliados venderem mais no piloto automático.",
  },
  {
    q: "A compra é feita pela Kirvano?",
    a: "Sim. A assinatura e a entrega da plataforma são processadas pela Kirvano, plataforma segura de pagamentos e produtos digitais.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Não há fidelidade: você cancela sua assinatura quando quiser.",
  },
  {
    q: "Meu WhatsApp corre risco de bloqueio?",
    a: "O Tokfy usa tecnologia de proteção para reduzir riscos, mas respeite os limites da plataforma para manter sua conta segura.",
  },
];

function CtaButton({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  const base = "w-full sm:w-auto rounded-full px-8 py-4 font-bold transition hover:scale-105";
  return (
    <a
      href={KIRVANO_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${secondary ? "border border-border bg-background text-foreground hover:bg-secondary" : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"}`}
    >
      {children}
    </a>
  );
}

function IconBox({ icon: Icon, className }: { icon: React.ComponentType<any>; className?: string }) {
  return (
    <div className="rounded-xl p-3 bg-secondary flex items-center justify-center">
      <Icon className={className} aria-hidden />
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d={i < rating ? "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.712l-7.414 3.167 1.481-8.279L.668 9.306l8.332-1.151z" : "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.712l-7.414 3.167 1.481-8.279L.668 9.306l8.332-1.151z"} />
        </svg>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-2 animate-float">
              <Sparkles className="h-5 w-5 text-primary-foreground" aria-hidden />
            </div>
            <span className="font-display text-xl font-extrabold tracking-tight">Tokfy<span className="text-primary">⚡</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#planos" className="hidden sm:block rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-secondary">Entrar</a>
            <CtaButton secondary>Assinar agora</CtaButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(600px_circle_at_10%_-20%,var(--primary-glow)_0%,transparent_50%)] opacity-30 animate-pulse-glow" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="relative flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Já ajudou +10 mil empreendedores a vender pelo WhatsApp</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight md:text-6xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Venda mais pelo <br />
              <span className="text-gradient">WhatsApp, no piloto automático.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md md:max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              O Tokfy automatiza seus disparos de WhatsApp com inteligência artificial: você encontra os contatos, ele dispara, nutre e fecha a venda para você. Sem ser bloqueado, sem trabalho manual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CtaButton>
                Começar a vender agora <ArrowRight className="ml-2 h-4 w-4" />
              </CtaButton>
              <a href="#como-funciona" className="rounded-full border border-border px-8 py-4 font-semibold text-foreground hover:bg-secondary transition-colors">
                Como funciona
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground border-t border-border pt-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div>
                <div className="text-foreground font-bold">+10 mil</div>
                <div className="text-xs">usuários ativos</div>
              </div>
              <div>
                <div className="text-foreground font-bold">3×</div>
                <div className="text-xs">mais vendas por mês</div>
              </div>
              <div>
                <div className="text-foreground font-bold">24/7</div>
                <div className="text-xs">automação ativa</div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full lg:h-[600px] flex items-center justify-center rounded-2xl p-2 bg-card ring-1 ring-border animate-float" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-primary via-accent to-primary -mx-[1px] -my-[1px] blur opacity-25 rounded-2xl mask mask-[linear-gradient(180deg,#000_60%,transparent)] animate-shimmer" />
            <div className="relative rounded-xl bg-background/60 p-6 border border-border/50 backdrop-blur shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-auto text-xs text-muted-foreground">tokfy.app/dashboard</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold">Campanha ativa</span>
                    <Badge variant="outline" className="text-xs">ativo</Badge>
                  </div>
                  <div className="text-2xl font-bold">2,4 mil</div>
                  <div className="text-xs text-muted-foreground">mensagens enviadas hoje</div>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold">Taxa de resposta</span>
                    <span className="text-xs text-primary">34%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "34%" }} />
                  </div>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold">Vendas fechadas</span>
                    <span className="text-xs text-primary">R$ 8.420</span>
                  </div>
                  <div className="text-xs text-muted-foreground">esta semana</div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 px-2">
                <Play className="h-4 w-4 text-primary" aria-hidden />
                <span className="text-sm font-medium">Assistir demo de 60s →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema / dor */}
      <section id="dor" className="mx-auto max-w-6xl px-6 py-24">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-5xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Você ainda está <span className="text-primary">enviando mensagem por mensagem?</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Enquanto você digita um contato de cada vez, a concorrência já disparou para milhares. O trabalho manual consome seu tempo, esquece follow-ups e deixa dinheiro na mesa.
            </p>
            <ul className="mt-10 space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {[
                "Perde horas respondendo as mesmas dúvidas",
                "Esquece de fazer follow-up e perde a venda",
                "Risco de bloqueio por disparo manual em massa",
                "Sem métricas: você não sabe o que está funcionando",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" aria-hidden />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block rounded-2xl bg-card p-6 ring-1 ring-border shadow-xl shadow-black/20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sem o Tokfy</span>
              <Badge variant="destructive" className="text-xs">ineficiente</Badge>
            </div>
            <div className="space-y-3">
              {["Digitação manual", "Sem agendamento", "Sem métricas", "Risco de bloqueio"].map((t, i) => (
                <div key={t} className="flex items-center justify-between px-3 py-2 rounded-lg bg-background/30">
                  <span className="text-sm text-muted-foreground">{t}</span>
                  <span className="text-xs font-bold text-destructive">✗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-24 bg-secondary/30">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Como funciona</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Do cadastro à venda, em 3 passos.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <article key={s.n} className="rounded-2xl p-8 bg-card ring-1 ring-border relative animate-fade-in-up hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary p-2 shadow-lg shadow-primary/40">
                <span className="text-xs font-bold text-primary-foreground">{s.n}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-4 text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-xs animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Por que escolher o Tokfy</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Tudo que você precisa para escalar.</h2>
          </div>
          <Badge>Mais vendido</Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <article key={b.t} className="rounded-2xl p-8 bg-card ring-1 ring-border hover:ring-primary/50 transition-colors animate-fade-in-up hover:-translate-y-2 transition-transform duration-300">
              <IconBox icon={b.icon} className="h-6 w-6 text-primary" />
              <h3 className="mt-6 font-display text-lg font-bold">{b.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Prova social */}
      <section className="mx-auto max-w-6xl px-6 py-24 bg-secondary/30">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs animate-fade-in-up" style={{ animationDelay: "0.1s" }}>O que dizem quem já usa</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Resultados reais.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-2xl p-8 bg-card ring-1 ring-border relative animate-fade-in-up hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-6 right-6">
                <Stars rating={t.stars} />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="mt-8 flex items-center gap-3">
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Escolha seu plano</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Uma mensalidade, venda ilimitada.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Iniciante",
              price: "R$ 97",
              period: "/mês",
              desc: "Para quem está começando a vender pelo WhatsApp.",
              items: ["Disparos ilimitados", "Agendamento básico", "Suporte por e-mail"],
              popular: false,
            },
            {
              name: "Profissional",
              price: "R$ 197",
              period: "/mês",
              desc: "O plano ideal para afiliados que querem escalar.",
              items: ["Tudo do Iniciante", "Métricas avançadas", "Suporte prioritário", "Antibloqueio"],
              popular: true,
            },
            {
              name: "Business",
              price: "R$ 397",
              period: "/mês",
              desc: "Para equipes e agências de marketing digital.",
              items: ["Tudo do Profissional", "Vários números", "API própria", "Gerente dedicado"],
              popular: false,
            },
          ].map((p) => (
            <article key={p.name} className={`rounded-2xl p-8 ring-2 relative flex flex-col animate-fade-in-up hover:-translate-y-2 transition-transform duration-300 ${p.popular ? "bg-primary text-primary-foreground ring-primary scale-105 md:scale-105 shadow-2xl shadow-primary/30" : "bg-card ring-border text-card-foreground"}`}>
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">Mais popular</div>
              )}
              <h3 className="font-display text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-base font-normal opacity-70">{p.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
              <CtaButton key={p.name} secondary={!p.popular}>
                Assinar {p.name}
              </CtaButton>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Pagamento e entrega pela Kirvano
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Perguntas frequentes</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Tudo claro antes de assinar.</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card mb-3 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <AccordionTrigger className="flex flex-col gap-2 text-left">
                <span className="font-medium">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Ainda tem dúvidas? Fale com a gente: <a href="mailto:suporte@tokfy.app" className="text-primary hover:underline">suporte@tokfy.app</a>
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-6 py-24 relative overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-2xl shadow-primary/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="relative z-10 text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Pronto para vender mais todo dia?</h2>
          <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Assine o Tokfy agora pela Kirvano e comece a automação de WhatsApp ainda hoje. Sua primeira venda pode estar a um disparo de distância.
          </p>
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <CtaButton>Quero assinar o Tokfy agora <ArrowRight className="ml-2 h-4 w-4" /></CtaButton>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/70">
            Pagamento seguro e entrega imediata pela Kirvano. Sem fidelidade, cancele quando quiser.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="mx-auto max-w-6xl px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-1.5">
              <Sparkles className="h-4 w-4 text-primary-foreground" aria-hidden />
            </div>
            <span className="font-display font-bold text-sm tracking-tight">Tokfy<span className="text-primary">⚡</span></span>
          </div>
          <p className="text-xs">
            Produto independente vendido por afiliado. Pagamento e entrega processados pela{" "}
            <a href={KIRVANO_LINK} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Kirvano</a>.
          </p>
          <div className="flex gap-4">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="hover:text-foreground transition-colors">
                {l.name}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-[10px] opacity-50">© 2026 Tokfy. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}