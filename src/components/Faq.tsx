import { faqs } from '../config.ts'

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">সাধারণ প্রশ্ন</h2>

      <div className="mt-6 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 open:border-white/20"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-slate-100">
              <span className="mr-2 inline-block text-fuchsia-400 transition group-open:rotate-90">▸</span>
              {item.q}
            </summary>
            <p className="mt-3 pl-6 text-sm leading-relaxed text-slate-400">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
