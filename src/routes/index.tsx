import { useState, type ReactNode, CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  ArrowRight, Check, X, Sparkles, Play, AlertTriangle,
  Zap, Rocket, Star, Image, ShieldCheck,
  CreditCard, RefreshCw, Menu as MenuIcon, ChevronRight,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CtaButton, SectionHead } from "@/components/landing/ui";
import {
  KIRVANO_LINK, navLinks, audiences, features, steps, examples, analysis, plans, fitYes, fitNo, faqs,
  payments, guarantee, testimonials, trustBadges,
} from "@/components/landing/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tokfy — Vídeos UGC com IA para TikTok Shop e afiliados" },
      { name: "description", content: "Encontre produtos em alta e crie vídeos UGC, imagens, roteiros e narrações com IA para vender no TikTok Shop sem precisar aparecer." },
      { property: "og:title", content: "Tokfy — Sua central de criação para social commerce" },
      { property: "og:description", content: "Da foto do produto ao vídeo de venda pronto: IA para afiliados, lojistas, agências e criadores." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "application-name", content: "Tokfy" },
    ],
    script: [
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Tokfy",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Cria vídeos UGC, imagens, roteiros e narrações com IA para afiliados, lojistas e criadores venderem no TikTok Shop.",
            "offers": { "@type": "Offer", "priceCurrency": "BRL", "price": "97.00" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "120" },
            "featureList": [
              "Vídeos UGC com IA",
              "Geração de imagens de produto",
              "Roteiros e cópias",
              "Narrações com voz",
              "Análise de criativos",
            ],
          }),
        },
      },
    ],
  }),
  component: Index,
});

const wrap = "mx-auto max-w-6xl px-6";

function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="Tokfy, início">
      <div className="relative rounded-2xl p-2 bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40">
        <Sparkles className="h-5 w-5 text-primary-foreground" aria-hidden />
      </div>
      <span className={cn("font-display text-xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground via-neon-primary to-neon-accent", className)}>Tokfy</span>
    </a>
  );
}

function MeshBlob() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none dots-bg">
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/25 blur-[140px] animate-blob" />
      <div className="absolute top-[-10%] right-[-15%] w-[45%] h-[45%] rounded-full bg-accent/25 blur-[120px] animate-blob" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-[-15%] left-[20%] w-[55%] h-[55%] rounded-full bg-primary/20 blur-[110px] animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/25 blur-[100px] animate-blob" style={{ animationDelay: "-1s" }} />
      <div className="absolute inset-0 bg-[image:var(--gradient-neon)] opacity-8 animate-gradient-xy mix-blend-[screen]" />
    </div>
  );
}

function Marquee() {
  return (
    <div className="relative h-7 border-y border-border bg-background/50 backdrop-blur-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      <div className="animate-marquee-slow flex items-center gap-10 px-6 whitespace-nowrap text-xs font-bold tracking-wider text-primary-foreground">
        {["Produtos em alta", "Vídeos UGC com IA", "Roteiros e cópias", "Narrações com voz", "TokPoints", "Missões e recompensas", "TikTok Shop", "Social commerce"].flatMap(() =>
          ["Produtos em alta", "Vídeos UGC com IA", "Roteiros e cópias", "Narrações com voz", "TokPoints", "Missões e recompensas", "TikTok Shop", "Social commerce"])}
      </div>
    </div>
  );
}

/* ---------- Menu mobile ---------- */
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden text-foreground"
            aria-label="Abrir menu"
          >
            <MenuIcon className="h-5 w-5" aria-hidden />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[85vw] md:w-[60vw] max-w-md bg-card border border-border glass p-6"
        >
          <div className="flex justify-between items-center mb-8">
            <Logo className="text-xl" />
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </Button>
          </div>
          <nav className="space-y-4" aria-label="Seções">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.name}
              </a>
            ))}
          </nav>
          <div className="mt-8 pt-6 border-t border-border">
            <CtaButton className="w-full glow-neon text-primary-foreground shadow-[0_0_30px_var(--neon-primary)/35]">Assinar Tokfy</CtaButton>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className={`${wrap} relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden`}>
      <div className="absolute inset-0 -z-10 grid-strong opacity-60" />
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-bold tracking-wider text-primary backdrop-blur border-gradient">
            <div className="h-2 w-2 rounded-full bg-neon-primary animate-pulse-neon shadow-[0_0_10px_var(--neon-primary)]" />
            IA para TikTok Shop, afiliados e social commerce
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Do produto ao vídeo que<span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-primary via-neon-accent to-neon-green"> vende.</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            A Tokfy reúne em um só lugar tudo para vender por vídeo: produtos em alta, vídeos UGC com IA, imagens, roteiros, narrações e análise de criativos. Sem aparecer e sem equipe de produção.
          </p>
          <div className="flex flex-col gap-5 sm:flex-row items-center">
            <CtaButton className="glow-neon shadow-[0_0_40px_var(--neon-primary)/35] text-primary-foreground">Começar a criar <ArrowRight className="h-5 w-5" /></CtaButton>
            <a href="#como-funciona" className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 py-4 font-bold backdrop-blur hover:bg-white/25 hover:text-foreground transition-all hover:scale-105">Como funciona</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md relative animate-float-vertical group">
          <PhoneMockup />
          <div className="absolute -bottom-8 -right-6 w-24 h-24 rounded-full bg-accent/40 blur-3xl animate-pulse-accent" />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[3rem] bg-card p-6 border border-border shadow-2xl shadow-primary/20 glass group-hover:border-primary/60 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 animate-gradient-xy" />
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/20 blur-2xl animate-pulse-neon" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/20 blur-2xl animate-pulse-neon" style={{ animationDelay: "-1.5s" }} />
      <div className="relative flex h-full flex-col justify-between z-10">
        <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-white/5 backdrop-blur border border-border text-xs font-bold tracking-tight text-primary">
          <span className="flex items-center gap-1.5"><Zap className="h-3 w-3" /> 9:16 · UGC</span>
          <span className="rounded-full bg-primary px-2.5 py-0.5 font-bold text-primary-foreground shadow-lg shadow-primary/40">IA</span>
        </div>
        <div className="flex-1 grid place-items-center relative overflow-hidden rounded-2xl bg-background">
          {/* Simulação de produto (ex: relógio) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32 rounded-full border-4 border-border flex items-center justify-center bg-white/5 shadow-inner">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Image className="h-12 w-12 text-primary-foreground" aria-hidden />
              </div>
            </div>
          </div>
          {/* Player de vídeo em loop */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
            <div className="w-full max-w-xs">
              <div className="h-1 w-full rounded-full bg-white/10 mb-2">
                <div className="h-full bg-primary rounded-full w-[70%] animate-pulse-glow" />
              </div>
              <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40">
                <Play className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 space-y-2">
          <p className="font-display text-sm font-bold tracking-tight">“Quer um visual elegante sem complicação?”</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Gancho · Benefício · CTA</p>
          <div className="rounded-full bg-primary py-2.5 px-6 text-center text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30">Clique e confira o seu</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Cards ---------- */
function Card({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <article className={cn(
      "rounded-3xl p-8 ring-1 ring-border bg-card transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:ring-primary/60 hover:shadow-2xl hover:shadow-primary/20 glass",
      className
    )} style={style}>
      {children}
    </article>
  );
}

/* ---------- Estatísticas ---------- */
function SectionStats() {
  const stats = [
    { label: "Vídeos gerados", value: "10k+" },
    { label: "Criadores ativos", value: "2k+" },
    { label: "Produtos em alta", value: "500+" },
    { label: "Taxa de conversão", value: "↑ 3.4x" },
  ];
  return (
    <section className={`${wrap} py-20 relative overflow-hidden`}>
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-neon)] opacity-5 blur-[100px]" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((s) => (
          <div key={s.label} className="group">
            <div className="flex items-center justify-center gap-2 text-primary mb-1">
              <span className="font-display text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-accent">{s.value}</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Antes & Depois (exemplos) ---------- */
function BeforeAfter() {
  return (
    <section className={`${wrap} py-24 relative overflow-hidden`}>
      <SectionHead
        eyebrow="Mostre, não apenas fale"
        title="Antes vs. Depois com a Tokfy"
        sub="Uma foto vira um vídeo de venda pronto em minutos, sem estúdio, sem amostras físicas e sem equipe de produção."
        className="mb-16"
      />
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-card border border-destructive/40">
          <div className="flex items-center gap-2 mb-6">
            <X className="h-5 w-5 text-destructive" aria-hidden />
            <h3 className="font-display text-lg font-bold text-destructive">Sem a Tokfy</h3>
          </div>
          <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            {["Contratar modelo e estúdio", "Comprar amostras físicas do produto", "Dias de gravação e edição", "Um vídeo por vez, pouca variação"].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <div className="shrink-0 mt-1 rounded-full bg-destructive/10 p-1"><X className="h-3 w-3 text-destructive" aria-hidden /></div>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 rounded-2xl bg-destructive/5 border border-destructive/20 text-xs text-destructive text-center">
            Alto custo e baixa velocidade de teste
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/40 shadow-2xl shadow-primary/20">
          <div className="flex items-center gap-2 mb-6">
            <Check className="h-5 w-5 text-primary" aria-hidden />
            <h3 className="font-display text-lg font-bold text-primary">Com a Tokfy</h3>
          </div>
          <ol className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            {["Envie 1 foto do produto", "IA gera o roteiro e a narração", "Vídeo 9:16 pronto em minutos", "Teste dezenas de variações"].map((t, i) => (
              <li key={t} className="flex gap-3 items-start">
                <div className="shrink-0 mt-1 rounded-full bg-primary/10 p-1.5">
                  <span className="h-3 w-3 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">{i + 1}</span>
                </div>
                {t}
              </li>
            ))}
          </ol>
          <div className="mt-8 p-4 rounded-2xl bg-primary/10 border border-primary/40 text-xs text-primary text-center flex items-center justify-center gap-2">
            <Play className="h-3 w-3" aria-hidden />
            Vídeo de venda pronto para publicar
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ---------- Depoimentos ---------- */
function Testimonials() {
  return (
    <section className={`py-24 bg-white/3 relative overflow-hidden`}>
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-neon)] opacity-4 blur-[120px] rotate-180" />
      <div className={wrap}>
        <SectionHead eyebrow="Prova social" title="O que criadores estão dizendo" className="mb-16" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="group">
              <div className="flex items-center gap-3 mb-6">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border border-border" />
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="mt-2 text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" aria-hidden />
                <span className="font-display text-sm font-bold text-primary">{t.result}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Selos de confiança ---------- */
function TrustBadges() {
  return (
    <section className={`${wrap} py-12 border-y border-border bg-background`}>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 hover:opacity-100 transition-opacity">
        {trustBadges.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-1.5 text-xs">
            <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />
            <div className="text-center">
              <span className="font-bold text-foreground">{b.label}</span>
              <span className="text-muted-foreground">{b.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Index ---------- */
export function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <MeshBlob />
      <Marquee />

      <header className="sticky top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <div className={`${wrap} flex items-center justify-between py-4`}>
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Seções">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">{l.name}</a>
            ))}
          </nav>
          <CtaButton className="px-5 py-2 text-sm glow-neon">Assinar</CtaButton>
          <MobileMenu />
        </div>
      </header>

      <Hero />

      {/* Estatísticas */}
      <SectionStats />

      {/* Antes & Depois */}
      <BeforeAfter />

      {/* Problema */}
      <section className={`${wrap} py-24`}>
        <div className="grid gap-6 md:grid-cols-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {["Precisa aparecer na câmera ou contratar quem grave", "Precisa do produto em mãos para mostrar", "Cria um vídeo por vez e testa pouco"].map((t) => (
            <Card key={t} className="group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-destructive/10 p-3 group-hover:bg-destructive group-hover:text-destructive-foreground transition-colors">
                  <X className="h-5 w-5" aria-hidden />
                </div>
                <span className="text-muted-foreground leading-relaxed">{t}</span>
              </div>
            </Card>
          ))}
        </div>
        <SectionHead
          eyebrow="O problema"
          title={<>Vender por vídeo exige <span className="text-gradient animate-text-reveal">volume.</span></>}
          sub="Gravar, comprar amostras, escrever roteiros e testar dezenas de variações consome tempo e dinheiro. Arquivos ficam espalhados em pastas, celulares e aplicativos."
          className="mt-20 mb-12"
        />
      </section>

      {/* Para quem */}
      <section id="para-quem" className="py-24 relative">
        <div className={wrap}>
          <SectionHead eyebrow="Para quem é" title="Feita para quem vende nas redes." className="mb-16" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ icon: Icon, t, d }, i) => (
              <Card key={t} className="group relative overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-blur-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <div className="relative z-10 inline-flex items-center justify-center rounded-2xl bg-secondary p-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden />
                </div>
                <h3 className="mt-8 font-display text-lg font-bold">{t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-24 bg-white/3 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-neon)] opacity-4 blur-[120px]" />
        <div className={wrap}>
          <SectionHead eyebrow="Recursos" title="Uma central de criação e operação." sub="Tudo que você precisa para pesquisar, criar, organizar e melhorar seus criativos." className="mb-20" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, t, d }, i) => (
              <Card key={t} className="group" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="inline-flex items-center justify-center rounded-2xl bg-secondary p-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500 mb-4">
                  <Icon className="h-6 w-6 text-primary group-hover:text-accent-foreground transition-colors" aria-hidden />
                </div>
                <h3 className="font-display text-base font-bold group-hover:text-foreground transition-colors">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-neon)] opacity-4 blur-[120px] rotate-180" />
        <div className={wrap}>
          <SectionHead eyebrow="Como funciona" title="Seu vídeo em 4 etapas." className="mb-20" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <Card key={s.n} className="group" style={{ animationDelay: `${Number(s.n) * 0.1}s` }}>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-display text-2xl font-extrabold mb-8 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
                  {s.n}
                </div>
                <h3 className="font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 bg-white/3 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-neon)] opacity-4 blur-[120px] rotate-180" />
        <div className={wrap}>
          <SectionHead eyebrow="Planos" title="Escolha seu acesso." sub="Os planos variam em duração, resolução e recursos. Confira as condições atuais na página de compra." className="mb-20" />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {plans.map((p) => (
              <article key={p.name} className={`relative flex flex-col rounded-[3rem] p-10 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] ${p.popular ? "bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 shadow-2xl shadow-primary/30" : "bg-card ring-1 ring-border glass hover:border-primary/60"}`}>
                {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/50">Mais completo</span>}
                <div className="flex items-center gap-2 mb-3">
                  {p.popular && <Star className="h-4 w-4 fill-primary-foreground" aria-hidden />}
                  <h3 className={`font-display text-3xl font-bold ${p.popular ? "text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-accent" : "text-foreground"}`}>{p.name}</h3>
                  <span className="ml-2 text-sm font-bold text-primary">{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="my-10 flex-1 space-y-4">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm">
                      <div className="shrink-0 rounded-full bg-primary/10 p-2">
                        <Check className="h-4 w-4 text-primary" aria-hidden />
                      </div>
                      {it}
                    </li>
                  ))}
                </ul>
                <CtaButton secondary={!p.popular} className={`w-full ${p.popular ? "glow-neon text-primary-foreground shadow-[0_0_30px_var(--neon-primary)/35]" : "border-border"}`}>Ver preço e assinar</CtaButton>
              </article>
            ))}
          </div>
          <TrustBadges />
          <p className="mt-8 text-center text-xs text-muted-foreground">{guarantee}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            {payments.map((p) => (
              <div key={p.label} className="flex items-center gap-1.5">
                {p.label === "Pix" ? (
                  <RefreshCw className="h-4 w-4 text-primary" aria-hidden />
                ) : (
                  <CreditCard className="h-4 w-4 text-primary" aria-hidden />
                )}
                <span>{p.label}</span>
                <span className="text-muted-foreground/60">·</span>
                <span>{p.hint}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Antes de assinar, confira: limite de vídeos, qualidade de exportação, uso comercial e marca d’água.</p>
        </div>
      </section>

      {/* Depoimentos */}
      <Testimonials />

      {/* Para quem vale */}
      <section className={`${wrap} py-24`}>
        <SectionHead eyebrow="Transparência" title="A Tokfy é para você?" className="mb-12" />
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="group">
            <div className="flex items-center gap-2 mb-6">
              <Check className="h-5 w-5 text-primary" aria-hidden />
              <h3 className="font-display text-lg font-bold text-primary">Vale a pena se você…</h3>
            </div>
            <ul className="space-y-3">{fitYes.map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <div className="shrink-0 rounded-full bg-primary/10 p-2"><Check className="h-4 w-4 text-primary" aria-hidden /></div>
                {t}
              </li>
            ))}</ul>
          </Card>
          <Card className="group border-destructive/40 hover:border-destructive/80 transition-colors">
            <div className="flex items-center gap-2 mb-6">
              <X className="h-5 w-5 text-destructive" aria-hidden />
              <h3 className="font-display text-lg font-bold text-muted-foreground">Talvez não seja para você se…</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">{fitNo.map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <div className="shrink-0 rounded-full bg-destructive/10 p-2"><X className="h-4 w-4 text-destructive" aria-hidden /></div>
                {t}
              </li>
            ))}</ul>
          </Card>
        </div>
        <div className="mt-10 flex gap-3 rounded-[2rem] border border-border bg-white/10 p-6 text-sm text-muted-foreground backdrop-blur-xl">
          <AlertTriangle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p>A IA pode cometer erros e alterar detalhes do produto, e nenhuma ferramenta garante vendas. Os melhores resultados vêm de pesquisa, bons prompts, revisão humana, testes e constância.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-neon)] opacity-4 blur-[120px] rotate-180" />
        <SectionHead eyebrow="Perguntas frequentes" title="Tudo claro antes de assinar." className="mb-16" />
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={f.q} className={`mb-4 rounded-[2rem] border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/60 glass ${i % 2 === 0 ? "border-primary/30" : ""}`}>
              <AccordionTrigger className="text-left font-medium group">
                {f.q}
                <ChevronRight className="ml-2 h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden />
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA final */}
      <section className={`relative overflow-hidden ${wrap} pb-32`}>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/20 blur-[100px]" />
        <div className="relative rounded-[4rem] p-10 text-center ring-1 ring-primary/60 shadow-2xl shadow-primary/30 glass md:p-20 border-gradient">
          <div className="flex justify-center gap-4 mb-8">
            <Rocket className="h-8 w-8 text-neon-accent" aria-hidden />
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">Comece a criar vídeos<span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-accent"> hoje.</span></h2>
            <Star className="h-8 w-8 text-neon-purple" aria-hidden />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Encontre o produto, gere o vídeo, publique e teste. Tudo em um só lugar.</p>
          <CtaButton className="mt-10 w-full md:w-auto glow-neon shadow-[0_0_40px_var(--neon-primary)/40] text-primary-foreground text-lg px-10 py-4">Quero assinar a Tokfy <ArrowRight className="h-5 w-5" /></CtaButton>
        </div>
      </section>

      {/* CTA sticky mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-background/80 backdrop-blur-xl border-t border-border px-4 pb-4 pt-2">
        <CtaButton className="w-full glow-neon text-primary-foreground shadow-[0_0_30px_var(--neon-primary)/35]">Assinar Tokfy</CtaButton>
      </div>

      <footer className="border-t border-border py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-neon)] opacity-4 blur-[100px]" />
        <div className={`${wrap} flex flex-col gap-8 md:flex-row md:items-center md:justify-between`}>
          <div className="flex items-center gap-3">
            <Logo />
          </div>
          <p className="text-xs text-muted-foreground">Pagamento e entrega processados por{" "}
            <a href={KIRVANO_LINK} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Kirvano</a>.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span>Tokfy · IA para social commerce</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
