import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, X, Sparkles, Play, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaButton, SectionHead } from "@/components/landing/ui";
import {
  KIRVANO_LINK, navLinks, audiences, features, steps, examples, analysis, plans, fitYes, fitNo, faqs,
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
    ],
  }),
  component: Index,
});

const wrap = "mx-auto max-w-6xl px-6";

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="Tokfy, início">
      <span className="relative rounded-xl bg-primary p-2 shadow-lg shadow-primary/40">
        <Sparkles className="h-5 w-5 text-primary-foreground" aria-hidden />
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-foreground">Tokfy</span>
    </a>
  );
}

function MeshBlob() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full mix-blend-[overlay]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-[120px] animate-blob" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/30 blur-[120px] animate-blob" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/25 blur-[100px] animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-accent/30 blur-[100px] animate-blob" style={{ animationDelay: "-1s" }} />
      <div className="absolute inset-0 bg-mix-blend-[screen] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGZpbHRlciBpZD0iYSI+CiAgICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyBTb3VyY2VFbGFwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDAgMCAwIDAgMCAxIDAgMCAwIDAiIC8+CiAgICA8ZmVDb2xvcnMgaW49IlNvdXJjZUdyYXBoaWNTb3VyY2VBbHBoYSIgcmVzdWx0PSJvdXRwdXRDb2xvciIgdmFsdWVzPSIwIiAvPgogICAgPGZlQmx1ciBpbj0ib3V0cHV0Q29sb3IiIHN0ZERldmlhdGlvbj0iNCIgLz4KICA8L2ZpbHRlcj4KICA8ZmVQZWFjZSBpbj0iU291cmNlR3JhcGhpYyBTb3VyY2VFbGFwaGEiIGZpbHRlcj0iYSIgc2NhbGU9IjEwMCIgcmVzdWx0PSJvdXRwdXRDb2xvciIgLz4KICA8ZmVDb2xvciBpbj0ib3V0cHV0Q29sb3IiIHJlc3VsdD0ib3V0cHV0Q29sb3IiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMSIgLz4KICA8ZmVDb252b2x1bGl0ZSBpbj0ib3V0cHV0Q29sb3IiIGluMz0iT3V0cHV0Q29sb3IiIGluMj0iT3V0cHV0Q29sb3IiIHR5cGU9InNjcmVlbiIgcmVzdWx0PSJvdXRwdXRDb2xvciIgLz4KPC9zdmc+')] opacity-40" />
    </div>
  );
}

function Marquee() {
  return (
    <div className="relative overflow-hidden h-6 border-t border-border bg-background py-1">
      <div className="animate-marquee flex items-center gap-12 px-6 whitespace-nowrap text-xs font-medium text-muted-foreground">
        {["Produtos em alta · Vídeos UGC com IA · Roteiros e cópias · Narrações com voz · TokPoints · Missões e recompensas · TikTok Shop · Social commerce"].flatMap(() =>
          ["Produtos em alta", "Vídeos UGC com IA", "Roteiros e cópias", "Narrações com voz", "TokPoints", "Missões e recompensas", "TikTok Shop", "Social commerce"])}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className={`${wrap} relative pt-20 pb-32 lg:pt-32 lg:pb-40`}>
      <div className="absolute inset-0 -z-10 mix-blend-[overlay] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGZpbHRlciBpZD0iYSI+CiAgICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyBTb3VyY2VFbGFwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMSAwIDAgMCAiIC8+CiAgICA8ZmVDb2xvcnMgaW49IlNvdXJjZUdyYXBoaWNTb3VyY2VBbHBoYSIgcmVzdWx0PSJvdXRwdXRDb2xvciIgdmFsdWVzPSIwIiAvPgogICAgPGZlQmx1ciBpbj0ib3V0cHV0Q29sb3IiIHN0ZERldmlhdGlvbj0iNCIgLz4KICA8L2ZpbHRlcj4KICA8ZmVQZWFjZSBpbj0iU291cmNlR3JhcGhpYyBTb3VyY2VFbGFwaGEiIGZpbHRlcj0iYSIgc2NhbGU9IjEwMCIgcmVzdWx0PSJvdXRwdXRDb2xvciIgLz4KICA8ZmVDb2xvciBpbj0ib3V0cHV0Q29sb3IiIHJlc3VsdD0ib3V0cHV0Q29sb3IiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMSIgLz4KICA8ZmVDb252b2x1bGl0ZSBpbj0ib3V0cHV0Q29sb3IiIGluMz0iT3V0cHV0Q29sb3IiIGluMj0iT3V0cHV0Q29sb3IiIHR5cGU9InNjcmVlbiIgcmVzdWx0PSJvdXRwdXRDb2xvciIgLz4KPC9zdmc+')] opacity-30 bg-[size:40px_40px]" />
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> IA para TikTok Shop, afiliados e social commerce
          </span>
          <h1 className="font-display text-5xl font-extrabold leading-tight md:text-7xl">
            Do produto ao <span className="text-gradient">vídeo que vende.</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            A Tokfy reúne em um só lugar tudo para vender por vídeo: produtos em alta, vídeos UGC com IA, imagens, roteiros, narrações e análise de criativos. Sem aparecer e sem equipe de produção.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CtaButton className="glow-primary">Começar a criar <ArrowRight className="h-4 w-4" /></CtaButton>
            <a href="#como-funciona" className="inline-flex items-center justify-center rounded-full border border-border bg-white/5 px-7 py-3.5 font-semibold backdrop-blur hover:bg-white/10 hover:text-foreground transition-colors">Como funciona</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xs relative animate-float">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[2.5rem] bg-card p-6 ring-2 ring-border shadow-2xl shadow-primary/20 glass">
            <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-15" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-muted-foreground"><span>9:16 · UGC</span><span className="rounded-full bg-primary px-2 py-0.5 font-bold text-primary-foreground">IA</span></div>
              <div className="grid place-items-center"><span className="rounded-full bg-background/70 p-6 backdrop-blur ring-1 ring-border"><Play className="h-10 w-10 text-primary" aria-hidden /></span></div>
              <div className="space-y-2">
                <p className="font-display text-sm font-bold">“Quer um visual elegante sem complicação?”</p>
                <p className="text-xs text-muted-foreground">Gancho · Benefício · CTA</p>
                <div className="rounded-full bg-primary py-2 text-center text-xs font-bold text-primary-foreground">Clique e confira o seu</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 w-20 h-20 rounded-full bg-accent/40 blur-xl animate-pulse-accent" />
        </div>
      </div>
    </section>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <article className={`rounded-2xl p-6 ring-1 ring-border bg-card transition-all duration-300 hover:-translate-y-2 hover:ring-primary/40 hover:shadow-xl hover:shadow-primary/10 glass ${className}`}>
      {children}
    </article>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <MeshBlob />
      <Marquee />

      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
        <div className={`${wrap} flex items-center justify-between py-4`}>
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Seções">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">{l.name}</a>
            ))}
          </nav>
          <CtaButton className="px-5 py-2 text-sm">Assinar</CtaButton>
        </div>
      </header>

      <Hero />

      {/* Problema */}
      <section className={`${wrap} py-24`}>
        <div className="grid gap-4 md:grid-cols-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {["Precisa aparecer na câmera ou contratar quem grave", "Precisa do produto em mãos para mostrar", "Cria um vídeo por vez e testa pouco"].map((t) => (
            <Card key={t}>
              <div className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden />
                <span className="text-muted-foreground">{t}</span>
              </div>
            </Card>
          ))}
        </div>
        <SectionHead
          eyebrow="O problema"
          title={<>Vender por vídeo exige <span className="text-gradient">volume.</span></>}
          sub="Gravar, comprar amostras, escrever roteiros e testar dezenas de variações consome tempo e dinheiro. Arquivos ficam espalhados em pastas, celulares e aplicativos."
          className="mt-20 mb-12"
        />
      </section>

      {/* Para quem */}
      <section id="para-quem" className="py-24">
        <div className={wrap}>
          <SectionHead eyebrow="Para quem é" title="Feita para quem vende nas redes." className="mb-12" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ icon: Icon, t, d }, i) => (
              <Card key={t} className="group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="inline-flex items-center justify-center rounded-xl bg-secondary p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-24 bg-white/3">
        <div className={wrap}>
          <SectionHead eyebrow="Recursos" title="Uma central de criação e operação." sub="Tudo que você precisa para pesquisar, criar, organizar e melhorar seus criativos." className="mb-16" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, t, d }, i) => (
              <Card key={t} className="group" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="inline-flex items-center justify-center rounded-xl bg-secondary p-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors mb-1">
                  <Icon className="h-5 w-5 text-primary group-hover:text-accent-foreground transition-colors" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-bold group-hover:text-foreground transition-colors">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-24">
        <div className={wrap}>
          <SectionHead eyebrow="Como funciona" title="Seu vídeo em 4 etapas." className="mb-16" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <Card key={s.n} className="group" style={{ animationDelay: `${s.n * 0.1}s` }}>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-xl font-extrabold mb-6 group-hover:scale-110 transition-transform">
                  {s.n}
                </div>
                <h3 className="font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exemplos + análise */}
      <section className={`${wrap} py-24`}>
        <div className="grid gap-6 lg:grid-cols-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {examples.map((e) => (
            <article key={e.product} className="rounded-2xl p-7 ring-1 ring-border bg-card transition-all hover:-translate-y-2 hover:ring-primary/40 hover:shadow-xl hover:shadow-primary/10 glass">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{e.product}</span>
              <p className="mt-3 font-display font-bold">{e.hook}</p>
              <ol className="mt-5 space-y-2 text-sm text-muted-foreground">
                {e.scenes.map((s, i) => <li key={s} className="flex gap-3"><span className="font-bold text-foreground">{i + 1}.</span>{s}</li>)}
              </ol>
            </article>
          ))}
          <article className="rounded-2xl p-7 ring-2 ring-primary/50 bg-primary/5 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 glass">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Análise de criativo</span>
            <ul className="mt-4 space-y-3">
              {analysis.map((a) => (
                <li key={a.k} className="flex items-center justify-between text-sm">
                  <span>{a.k}</span>
                  <span className={a.ok ? "font-semibold text-primary" : "font-semibold text-destructive"}>{a.v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">Recomendação: mostrar o produto nos primeiros segundos e incluir uma chamada mais objetiva.</p>
          </article>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 bg-white/3">
        <div className={wrap}>
          <SectionHead eyebrow="Planos" title="Escolha seu acesso." sub="Os planos variam em duração, resolução e recursos. Confira as condições atuais na página de compra." className="mb-16" />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {plans.map((p) => (
              <article key={p.name} className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 ${p.popular ? "bg-primary/10 ring-2 ring-primary shadow-xl shadow-primary/25" : "bg-card ring-1 ring-border glass"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/40">Mais completo</span>}
                <h3 className={`font-display text-2xl font-bold ${p.popular ? "text-primary" : "text-foreground"}`}>{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="my-8 flex-1 space-y-3">
                  {p.items.map((it) => <li key={it} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />{it}</li>)}
                </ul>
                <CtaButton secondary={!p.popular} className={`w-full ${p.popular ? "" : "border-border"}`}>Ver preço e assinar</CtaButton>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">Antes de assinar, confira: limite de vídeos, qualidade de exportação, uso comercial e marca d’água.</p>
        </div>
      </section>

      {/* Para quem vale */}
      <section className={`${wrap} py-24`}>
        <SectionHead eyebrow="Transparência" title="A Tokfy é para você?" className="mb-12" />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-display text-lg font-bold text-primary">Vale a pena se você…</h3>
            <ul className="mt-5 space-y-3">{fitYes.map((t) => <li key={t} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />{t}</li>)}</ul>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-bold text-muted-foreground">Talvez não seja para você se…</h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">{fitNo.map((t) => <li key={t} className="flex gap-2"><X className="h-5 w-5 shrink-0" aria-hidden />{t}</li>)}</ul>
          </Card>
        </div>
        <div className="mt-8 flex gap-3 rounded-2xl border border-border bg-white/5 p-6 text-sm text-muted-foreground backdrop-blur">
          <AlertTriangle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p>A IA pode cometer erros e alterar detalhes do produto, e nenhuma ferramenta garante vendas. Os melhores resultados vêm de pesquisa, bons prompts, revisão humana, testes e constância.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <SectionHead eyebrow="Perguntas frequentes" title="Tudo claro antes de assinar." className="mb-12" />
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={f.q} className={`mb-3 rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:shadow-primary/5 glass ${i % 2 === 0 ? "border-primary/20" : ""}`}>
              <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA final */}
      <section className={`relative overflow-hidden ${wrap} pb-24`}>
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] opacity-10 blur-[80px]" />
        <div className="rounded-[3rem] p-8 text-center ring-1 ring-primary/40 shadow-2xl shadow-primary/20 glass md:p-16">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Comece a criar vídeos <span className="text-gradient">hoje.</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Encontre o produto, gere o vídeo, publique e teste. Tudo em um só lugar.</p>
          <CtaButton className="mt-8 w-full md:w-auto glow-primary">Quero assinar a Tokfy <ArrowRight className="h-4 w-4" /></CtaButton>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className={`${wrap} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <p className="text-xs text-muted-foreground">Pagamento e entrega processados pela{" "}
            <a href={KIRVANO_LINK} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline transition-colors">Kirvano</a>.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Tokfy · IA para social commerce</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
