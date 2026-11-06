import { siteConfig } from '../config.ts'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-3xl px-6 py-12 text-sm text-slate-400">
        <h2 className="text-base font-semibold text-slate-200">ব্যবহারের শর্ত ও দাবিত্যাগ</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            এটি {siteConfig.appName}-এর অফিসিয়াল অ্যাপ নয়; {siteConfig.appName}-এর বিকাশকারীর সাথে এর
            কোনো সম্পর্ক নেই। নাম শুধু বোঝানোর জন্য ব্যবহৃত।
          </li>
          <li>বিল্ডটি ব্যক্তিগত ব্যবহারের জন্য; বিক্রি বা পুনর্বিতরণের আগে সংশ্লিষ্ট লাইসেন্স যাচাই করুন।</li>
          <li>
            এই পেজ নিজে কোনো APK ফাইল হোস্ট করে না — ডাউনলোড বাটন যেখানে নিয়ে যায়, সেটি রিপো-মালিকের
            দেওয়া লিংক।
          </li>
          <li>মড করা অ্যাপে কোনো ওয়ারেন্টি নেই; অ্যাকাউন্ট বা ডেটা সংক্রান্ত ঝুঁকি ব্যবহারকারীর নিজের।</li>
          <li>এই প্রকল্প কোনো সাবস্ক্রিপশন বা পেইড কনটেন্ট আনলক করে না।</li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className="text-slate-300 underline decoration-dotted hover:text-white"
            href={siteConfig.sourceRepoUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub রিপো
          </a>
          <a
            className="text-slate-300 underline decoration-dotted hover:text-white"
            href={siteConfig.buildWorkflowUrl}
            target="_blank"
            rel="noreferrer"
          >
            বিল্ড ওয়ার্কফ্লো
          </a>
          <a className="text-slate-300 underline decoration-dotted hover:text-white" href="#install">
            ইনস্টল গাইড
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          {siteConfig.buildName} · {siteConfig.appVersion} · প্যাকেজ {siteConfig.packageName}
        </p>
      </div>
    </footer>
  )
}
