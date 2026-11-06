import { siteConfig } from '../config.ts'

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-wide text-slate-300">
          ব্যক্তিগত মড বিল্ড · অফিসিয়াল অ্যাপ নয়
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.appName}{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
            {siteConfig.buildName}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {siteConfig.appVersion} থেকে বানানো বিজ্ঞাপনমুক্ত বিল্ড — সাথে ফাইল-পিকার সাপোর্ট, নিজে থেকে
          বন্ধ হয়ে যাওয়ার সমস্যার সমাধান, আর সাইন করা ইনস্টলযোগ্য APK।
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110 sm:w-auto"
          >
            ⬇️ APK ডাউনলোড
          </a>
          <a
            href={siteConfig.sourceRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-slate-200 transition hover:bg-white/10 sm:w-auto"
          >
            সোর্স ও বিল্ড লগ
          </a>
        </div>

        {siteConfig.placeholderDownload && (
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-4 text-left text-sm text-amber-200">
            <p className="font-semibold">ডাউনলোড লিংক এখনো বসানো হয়নি</p>
            <p className="mt-1 text-amber-100/90">
              বিল্ডের <code>…-adfree.apk</code> ফাইলটি এই রিপোর <strong>Releases</strong>-এ আপলোড করে
              তার লিংক <code>src/config.ts</code>-এর <code>downloadUrl</code>-এ বসান, আর{' '}
              <code>placeholderDownload: false</code> করে দিন। এই পেজ নিজে কোনো APK হোস্ট করে না।
            </p>
          </div>
        )}

        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 text-left sm:grid-cols-4">
          <Info label="প্যাকেজ" value={siteConfig.packageName} />
          <Info label="সংস্করণ" value={siteConfig.appVersion} />
          <Info label="Android" value={siteConfig.minAndroid} />
          <Info label="আকার" value={siteConfig.apkSizeLabel} />
        </dl>
      </div>
    </header>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <dt className="text-xs uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="truncate text-sm font-medium text-slate-100" title={value}>
        {value}
      </dd>
    </div>
  )
}
