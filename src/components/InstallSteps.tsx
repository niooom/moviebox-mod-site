import { installSteps } from '../config.ts'

export default function InstallSteps() {
  return (
    <section id="install" className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold sm:text-3xl">কীভাবে ইনস্টল করবেন</h2>
        <p className="mt-2 text-sm text-slate-400">
          ইনস্টল করার আগে পুরোনো অ্যাপ আনইনস্টল করা বাধ্যতামূলক — সিগনেচার আলাদা।
        </p>

        <ol className="mt-8 space-y-4">
          {installSteps.map((step, index) => (
            <li key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-500 text-sm font-bold">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-slate-300">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl border border-sky-400/25 bg-sky-400/10 p-5 text-sm text-sky-100">
          <p className="font-semibold">ফোনে সতর্কতা এলে</p>
          <p className="mt-1 text-sky-100/90">
            Play Protect “unknown app” দেখাতে পারে — এটি স্বাভাবিক, কারণ APK-টি নতুন key দিয়ে সাইন করা।
            “Install anyway” বেছে নিলে ইনস্টল হবে।
          </p>
        </div>
      </div>
    </section>
  )
}
