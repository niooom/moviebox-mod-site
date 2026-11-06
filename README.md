# MovieBox Mod — ডাউনলোড ল্যান্ডিং পেজ

MovieBox v4.0.03.1028.03-এর ব্যক্তিগত মড বিল্ডের জন্য ডাউনলোড পেজ। React + Vite + TypeScript + Tailwind দিয়ে বানানো, GitHub Pages-এ অটো ডিপ্লয় হয়।

পেজে যা আছে: হিরো + ডাউনলোড বাটন, ফিচার কার্ড, ইনস্টল গাইড (৪ ধাপ), সাধারণ প্রশ্ন, দাবিত্যাগ ও সোর্স লিংক।

## ডাউনলোড লিংক যুক্ত করা

1. বিল্ড থেকে `MovieBox_v4.0.03.1028.03_updated-adfree.apk` ফাইলটি নামান।
2. এই রিপোর **Releases → Draft a new release**-এ সেটি attach করে publish করুন।
3. asset-এর সরাসরি লিংক `src/config.ts`-এর `downloadUrl`-এ বসিয়ে `placeholderDownload: false` করুন।

> এই পেজ নিজে কোনো APK হোস্ট করে না; লিংক শুধু নির্দেশ করে।

## InsForge ব্যাকএন্ড

ব্যাকএন্ড কাজ চলে `@insforge/cli` দিয়ে (কখনোই গ্লোবালি ইনস্টল নয়, সবসময় `npx -y @insforge/cli ...`)।

- ওয়ার্কফ্লো: `.github/workflows/insforge.yml` (manual) — `whoami`, `metadata`, `tables`, `storage buckets`, `functions list`, বা কাস্টম SQL
- সিক্রেট: **`INSFORGE_ACCESS_TOKEN`** (repo → Settings → Secrets and variables → Actions) — `uak_...` কী কখনো ফাইলে বা ফ্রন্টএন্ড কোডে বসবে না
- ডকুমেন্টেশন: [`docs/insforge.md`](docs/insforge.md) · ভেন্ডর করা স্কিল: [`.agents/skills/insforge-cli/SKILL.md`](.agents/skills/insforge-cli/SKILL.md)
- `.insforge/` (লিংক করা প্রজেক্টের API key থাকে) `.gitignore`-এ বাদ দেওয়া — কখনো কমিট করবেন না

## স্থানীয়ভাবে চালানো

```bash
npm install
npm run dev      # ডেভ সার্ভার
npm run build    # dist/ তৈরি করে
```

## ডিপ্লয়

`main`-এ পুশ করলেই `.github/workflows/deploy.yml` বিল্ড করে `gh-pages` ব্রাঞ্চে পাবলিশ করে — কোনো ম্যানুয়াল সেটআপ ছাড়াই। লাইভ লিংক:

- `https://cdn.jsdelivr.net/gh/niooom/moviebox-mod-site@gh-pages/index.html`
- `https://raw.githack.com/niooom/moviebox-mod-site/gh-pages/index.html`

চাইলে চিরাচরিত github.io লিংকও পাওয়া যায়: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / root** — ব্যস, তারপর `https://niooom.github.io/moviebox-mod-site/` কাজ করবে।

## দাবিত্যাগ

অফিসিয়াল অ্যাপ নয়; MovieBox-এর বিকাশকারীর সাথে কোনো সম্পর্ক নেই। বিল্ডটি ব্যক্তিগত ব্যবহারের জন্য, এবং এই প্রকল্প কোনো সাবস্ক্রিপশন/পেইড কনটেন্ট আনলক করে না।
