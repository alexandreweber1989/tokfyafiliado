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
      <span className="rounded-lg bg-primary p-2"><Sparkles className="h-5 w-5 text-primary-foreground" aria-hidden /></span>
      <span className="font-display text-xl font-extrabold tracking-tight">Tokfy</span>
    </a>
  );
}

function Hero() {
  return (
    <section className={`${wrap} relative py-16 md:py-28`}>
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> IA para TikTok Shop, afiliados e social commerce
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">
            Da foto do produto ao <span className="text-gradient">vídeo que vende.</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            A Tokfy reúne em um só lugar tudo para vender por vídeo: produtos em alta, vídeos UGC com IA, imagens, roteiros, narrações e análise de criativos. Sem aparecer e sem equipe de produção.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CtaButton>Começar a criar <ArrowRight className="h-4 w-4" /></CtaButton>
            <a href="#como-funciona" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 font-semibold hover:bg-secondary">Como funciona</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xs animate-float">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-card p-5 ring-1 ring-border shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-20" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-muted-foreground"><span>9:16 · UGC</span><span className="rounded-full bg-primary px-2 py-0.5 font-bold text-primary-foreground">IA</span></div>
              <div className="grid place-items-center"><span className="rounded-full bg-background/70 p-5 backdrop-blur"><Play className="h-8 w-8 text-primary" aria-hidden /></span></div>
              <div className="space-y-2">
                <p className="font-display text-sm font-bold">“Quer um visual elegante sem complicação?”</p>
                <p className="text-xs text-muted-foreground">Gancho · Benefício · CTA</p>
                <div className="rounded-full bg-primary py-2 text-center text-xs font-bold text-primary-foreground">Clique e confira o seu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className={`${wrap} flex items-center justify-between py-4`}>
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Seções">
            {navLinks.map((l) => <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground">{l.name}</a>)}
          </nav>
          <CtaButton className="px-5 py-2 text-sm">Assinar</CtaButton>
        </div>
      </header>

      <Hero />

      {/* Problema */}
      <section className={`${wrap} py-20`}>
        <SectionHead eyebrow="O problema" title={<>Vender por vídeo exige <span className="text-primary">volume.</span></>}
          sub="Gravar, comprar amostras, escrever roteiros e testar dezenas de variações consome tempo e dinheiro. Arquivos ficam espalhados em pastas, celulares e aplicativos." />
        <div className="grid gap-4 md:grid-cols-3">
          {["Precisa aparecer na câmera ou contratar quem grave", "Precisa do produto em mãos para mostrar", "Cria um vídeo por vez e testa pouco"].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-2xl bg-card p-6 ring-1 ring-border">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden /><span className="text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section id="para-quem" className="bg-secondary/30 py-24">
        <div className={wrap}>
          <SectionHead eyebrow="Para quem é" title="Feita para quem vende nas redes." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ icon: Icon, t, d }) => (
              <article key={t} className="rounded-2xl bg-card p-7 ring-1 ring-border transition hover:-translate-y-1 hover:ring-primary/50">
                <Icon className="h-7 w-7 text-primary" aria-hidden />
                <h3 className="mt-5 font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className={`${wrap} py-24`}>
        <SectionHead eyebrow="Recursos" title="Uma central de criação e operação." sub="Tudo que você precisa para pesquisar, criar, organizar e melhorar seus criativos." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, t, d }) => (
            <article key={t} className="rounded-2xl bg-card p-6 ring-1 ring-border transition hover:ring-primary/50">
              <span className="inline-flex rounded-xl bg-secondary p-3"><Icon className="h-5 w-5 text-primary" aria-hidden /></span>
              <h3 className="mt-4 font-display text-base font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-secondary/30 py-24">
        <div className={wrap}>
          <SectionHead eyebrow="Como funciona" title="Seu vídeo em 4 etapas." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <article key={s.n} className="rounded-2xl bg-card p-7 ring-1 ring-border">
                <span className="font-display text-3xl font-extrabold text-primary">{s.n}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Exemplos + análise */}
      <section className={`${wrap} py-24`}>
        <SectionHead eyebrow="Na prática" title="Roteiros que seguram a atenção." sub="Gancho, problema, produto, benefício e CTA — a estrutura que a Tokfy ajuda a montar." />
        <div className="grid gap-6 lg:grid-cols-3">
          {examples.map((e) => (
            <article key={e.product} className="rounded-2xl bg-card p-7 ring-1 ring-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{e.product}</span>
              <p className="mt-3 font-display font-bold">{e.hook}</p>
              <ol className="mt-5 space-y-2 text-sm text-muted-foreground">
                {e.scenes.map((s, i) => <li key={s} className="flex gap-3"><span className="font-bold text-foreground">{i + 1}.</span>{s}</li>)}
              </ol>
            </article>
          ))}
          <article className="rounded-2xl bg-card p-7 ring-1 ring-primary/50">
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
      <section id="planos" className="bg-secondary/30 py-24">
        <div className={wrap}>
          <SectionHead eyebrow="Planos" title="Escolha seu acesso." sub="Os planos variam em duração, resolução e recursos. Confira as condições atuais na página de compra." />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {plans.map((p) => (
              <article key={p.name} className={`relative flex flex-col rounded-2xl p-8 ring-2 ${p.popular ? "bg-card ring-primary shadow-2xl shadow-primary/20" : "bg-card ring-border"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">Mais completo</span>}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="my-8 flex-1 space-y-3">
                  {p.items.map((it) => <li key={it} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />{it}</li>)}
                </ul>
                <CtaButton secondary={!p.popular}>Ver preço e assinar</CtaButton>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">Antes de assinar, confira: limite de vídeos, qualidade de exportação, uso comercial e marca d’água.</p>
        </div>
      </section>

      {/* Para quem vale */}
      <section className={`${wrap} py-24`}>
        <SectionHead eyebrow="Transparência" title="A Tokfy é para você?" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 ring-1 ring-border">
            <h3 className="font-display text-lg font-bold text-primary">Vale a pena se você…</h3>
            <ul className="mt-5 space-y-3">{fitYes.map((t) => <li key={t} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />{t}</li>)}</ul>
          </div>
          <div className="rounded-2xl bg-card p-8 ring-1 ring-border">
            <h3 className="font-display text-lg font-bold text-muted-foreground">Talvez não seja para você se…</h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">{fitNo.map((t) => <li key={t} className="flex gap-2"><X className="h-5 w-5 shrink-0" aria-hidden />{t}</li>)}</ul>
          </div>
        </div>
        <div className="mt-6 flex gap-3 rounded-2xl border border-border p-6 text-sm text-muted-foreground">
          <AlertTriangle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p>A IA pode cometer erros e alterar detalhes do produto, e nenhuma ferramenta garante vendas. Os melhores resultados vêm de pesquisa, bons prompts, revisão humana, testes e constância.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <SectionHead eyebrow="Perguntas frequentes" title="Tudo claro antes de assinar." />
        <Accordion type="single" collapsible>
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="mb-3 rounded-xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA final */}
      <section className={`${wrap} pb-24`}>
        <div className="rounded-3xl bg-card p-10 text-center ring-1 ring-primary/40 md:p-16">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Comece a criar vídeos <span className="text-gradient">hoje.</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Encontre o produto, gere o vídeo, publique e teste. Tudo em um só lugar.</p>
          <CtaButton className="mt-8">Quero assinar a Tokfy <ArrowRight className="h-4 w-4" /></CtaButton>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-xs text-muted-foreground">
        <div className={`${wrap} flex flex-col gap-4 md:flex-row md:items-center md:justify-between`}>
          <Logo />
          <p>Pagamento e entrega processados pela <a href={KIRVANO_LINK} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Kirvano</a>.</p>
        </div>
      </footer>
    </main>
  );
}
