import { features } from '../config.ts'

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">এই বিল্ডে কী কী আছে</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-400">
        প্রতিটি পরিবর্তন ম্যানিফেস্ট বা smali স্তরে করা — অ্যাপের key, অ্যাকাউন্ট বা ডেটা ছোঁয়া হয় না।
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-5 transition hover:border-white/20"
          >
            <h3 className="text-base font-semibold text-slate-100">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
