import { createFileRoute } from "@tanstack/react-router";
import { Infinity as InfinityIcon, Sparkles, Zap, Layers, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loopa — Gere vídeos infinitos com IA" },
      { name: "description", content: "Loopa cria vídeos sem fim para TikTok, Reels e Shorts. Defina o tema, e a IA publica conteúdo novo todo dia, sem parar." },
      { property: "og:title", content: "Loopa — Gere vídeos infinitos com IA" },
      { property: "og:description", content: "Vídeos sem fim para suas redes, criados por IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: InfinityIcon, t: "Fluxo sem fim", d: "Defina um tema uma vez e receba vídeos novos todos os dias, sem repetir." },
  { icon: Sparkles, t: "Roteiro, voz e edição", d: "A IA escreve, narra, corta e legenda. Você só aprova." },
  { icon: Zap, t: "Pronto em minutos", d: "Do prompt ao vídeo vertical em menos de 3 minutos." },
  { icon: Layers, t: "Todas as redes", d: "Publica direto no TikTok, Reels, Shorts e Kwai." },
];

const plans = [
  { n: "Criador", p: "R$ 49", items: ["30 vídeos/mês", "1 canal", "Legendas automáticas"] },
  { n: "Infinito", p: "R$ 149", items: ["Vídeos ilimitados", "5 canais", "Vozes premium", "Publicação automática"], hot: true },
  { n: "Agência", p: "R$ 449", items: ["Tudo do Infinito", "25 canais", "Marca própria", "Suporte prioritário"] },
];

const topics = ["Curiosidades", "Histórias de terror", "Finanças", "Receitas", "Motivação", "Fatos de história", "Tecnologia", "Esportes"];

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-extrabold">loopa<span className="text-primary">∞</span></span>
        <a href="#planos" className="rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-secondary">Ver planos</a>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 text-center md:pt-24">
        <p className="animate-rise mx-auto mb-6 w-fit rounded-full bg-secondary px-4 py-1 text-sm text-muted-foreground">+12 milhões de vídeos gerados</p>
        <h1 className="animate-rise font-display text-4xl font-extrabold leading-tight md:text-7xl">
          Vídeos que <span className="text-gradient">nunca acabam.</span>
        </h1>
        <p className="animate-rise mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Escolha um tema. A Loopa cria, edita e publica vídeos novos todos os dias, para sempre. Seu canal cresce enquanto você dorme.
        </p>
        <div className="animate-rise mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#planos" className="rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition hover:scale-105">Começar grátis</a>
          <a href="#como" className="rounded-full border border-border px-8 py-4 font-semibold hover:bg-secondary">Como funciona</a>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border py-6" aria-hidden>
        <div className="animate-marquee flex w-max gap-4">
          {[...topics, ...topics].map((t, i) => (
            <div key={`${t}-${i}`} className="flex h-40 w-24 shrink-0 items-end rounded-xl bg-card p-2 text-xs font-semibold ring-1 ring-border" style={{ backgroundImage: "var(--gradient-hero)", opacity: 0.25 + (i % 4) * 0.2 }}>
              {t}
            </div>
          ))}
        </div>
      </div>

      <section id="como" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl font-extrabold md:text-5xl">Uma fábrica de conteúdo<br />no piloto automático.</h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {features.map(({ icon: Icon, t, d }) => (
            <article key={t} className="rounded-2xl bg-card p-8 ring-1 ring-border">
              <Icon className="h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center font-display text-3xl font-extrabold md:text-5xl">Escolha seu ritmo</h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <article key={p.n} className={`rounded-2xl p-8 ring-1 ${p.hot ? "bg-primary text-primary-foreground ring-primary" : "bg-card ring-border"}`}>
              <h3 className="font-display text-lg font-bold">{p.n}</h3>
              <p className="mt-4 text-4xl font-extrabold">{p.p}<span className="text-base font-normal opacity-70">/mês</span></p>
              <ul className="mt-6 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2"><Check className="h-4 w-4" aria-hidden />{it}</li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full py-3 font-bold ${p.hot ? "bg-background text-foreground" : "bg-primary text-primary-foreground"}`}>Assinar</button>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">© 2026 Loopa. Vídeos infinitos.</footer>
    </main>
  );
}
