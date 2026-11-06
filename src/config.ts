/**
 * পুরো পেজের তথ্য এখান থেকেই আসে — কোড ছোঁয়ার দরকার নেই, শুধু এই মানগুলো বদলান।
 *
 * ডাউনলোড লিংক বসানোর নিয়ম:
 *   1. Actions-এর আর্টিফ্যাক্ট থেকে MovieBox_..._adfree.apk নামান
 *      (নামের শেষে -adfree; ভেতরের ফাইলটাই ইনস্টল করার APK)।
 *   2. এই রিপোর Releases → Draft a new release → APK ফাইলটি attach করে publish করুন।
 *   3. সেই release asset-এর সরাসরি লিংক downloadUrl-এ বসিয়ে
 *      placeholderDownload: false করে দিন।
 */
export const siteConfig = {
  buildName: 'Nooxe Build',
  appName: 'MovieBox',
  appVersion: 'v4.0.03.1028.03',
  packageName: 'com.community.mbox.ng',
  minAndroid: '8.0 (Oreo)+',
  apkSizeLabel: 'প্রায় ৬০ MB',
  downloadUrl: 'https://github.com/niooom/moviebox-mod-site/releases',
  placeholderDownload: true,
  sourceRepoUrl: 'https://github.com/niooom/moviebox-mod-site',
  buildWorkflowUrl: 'https://github.com/niooom/moviebox-mod-site/actions',
} as const

export const features = [
  {
    title: 'বিজ্ঞাপনমুক্ত বিল্ড',
    body: 'AdMob, Pangle, Mintegral-সহ ৩৫টি ad নেটওয়ার্কের ম্যানিফেস্ট এন্ট্রি বাদ; অ্যাপ নিজে যে ad কোড ডাকে সেটি অক্ষত রাখা হয়, যাতে ক্র্যাশ না হয়।',
  },
  {
    title: 'ফাইল-পিকার সাপোর্ট',
    body: 'ফাইল ম্যানেজারে “Open with”, আর WhatsApp/ব্রাউজার থেকে ফাইল পাঠানোর তালিকায় অ্যাপটি দেখা যায় (VIEW + SEND + GET_CONTENT)।',
  },
  {
    title: 'নিজে থেকে বন্ধ হওয়া বন্ধ',
    body: 'অ্যাপের ভেতরের System.exit / killProcess / finishAffinity কল নিষ্ক্রিয় করা, তাই কাজ করার মাঝপথে হঠাৎ বন্ধ হয় না।',
  },
  {
    title: 'ম্যানিফেস্ট যাচাই',
    body: 'রিবিল্ডের আগে প্রতিটি ম্যানিফেস্ট কম্পোনেন্ট dex-এ আছে কি না যাচাই হয় — “ক্লাস পাওয়া যায়নি” জাতীয় ক্র্যাশ এড়াতে।',
  },
  {
    title: 'নিজের key দিয়ে সাইন',
    body: 'zipalign + apksigner (v1/v2/v3) দিয়ে সাইন করা, তাই সরাসরি ইনস্টলযোগ্য। সিগনেচার আলাদা — পুরোনো অ্যাপ আগে আনইনস্টল করতে হবে।',
  },
  {
    title: 'প্রতিবার রিপোর্ট',
    body: 'কী মোছা হলো, কী ঝুঁকি রইল, কীভাবে সাইন হলো — সব প্রতিবার বিল্ডের রিপোর্টে সংরক্ষিত থাকে।',
  },
]

export const installSteps = [
  'ফোন থেকে পুরোনো MovieBox আনইনস্টল করুন — সিগনেচার আলাদা, তাই আপডেট হিসেবে ইনস্টল হবে না।',
  'Settings → Security (বা Apps) → “Install unknown apps” চালু করুন যে অ্যাপ দিয়ে ফাইলটি খুলবেন (Chrome/File Manager)।',
  'ডাউনলোড করা APK-তে ট্যাপ করে “Install” চাপুন। Play Protect সতর্কতা এলে “Install anyway” বেছে নিন।',
  'অ্যাপ খুলুন। ফাইল-পিকার পরীক্ষা: ফাইল ম্যানেজারে ফাইলে চাপ দিয়ে Open with → তালিকায় MovieBox, বা WhatsApp-এ ছবি পাঠানোর সময় picker-এ MovieBox।',
]

export const faqs = [
  {
    q: 'ডাউনলোড লিংক কাজ করছে না কেন?',
    a: 'বিল্ডের APK Actions-এর আর্টিফ্যাক্টে থাকে। সেটি Releases-এ আপলোড করে src/config.ts-এর downloadUrl-এ লিংক বসালেই বাটন কাজ করবে। এই পেজ নিজে কোনো APK হোস্ট করে না।',
  },
  {
    q: 'অ্যাপ কি Play Store থেকে আপডেট হবে?',
    a: 'না। সিগনেচার বদলানো, তাই Play Store-ভিত্তিক আপডেট কাজ করবে না। নতুন সংস্করণ এলে আবার বিল্ড করতে হবে।',
  },
  {
    q: 'প্রিমিয়াম সাবস্ক্রিপশন বা কয়েন আনলক হবে?',
    a: 'না। এই প্রকল্প শুধু বিজ্ঞাপন সরানো, ফাইল-পিকার যোগ করা আর ক্র্যাশ/অটো-ক্লোজ ঠিক করার কাজ করে। পেইড সিস্টেম বাইপাস করার কোনো কিছু এখানে নেই, এবং সেটি করা হয় না।',
  },
  {
    q: 'নিজে থেকে বন্ধ হয়ে যাওয়ার সমস্যার সমাধান হলো কীভাবে?',
    a: 'অ্যাপের নিজের কোড System.exit/killProcess ডাকত; ad কোড মোছার পর কিছু কল ফেল করলে অ্যাপ বন্ধ হয়ে যেত। নতুন বিল্ডে exit-কল নিষ্ক্রিয় করা হয় এবং ad কোড শুধু নিরাপদ অংশে সরানো হয়।',
  },
]
