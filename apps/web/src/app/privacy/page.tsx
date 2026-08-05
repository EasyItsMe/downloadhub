export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900/50 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800/50 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
          <p className="text-slate-500 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">1. Information We Collect</h2>
          <p>SnapVid is designed to be privacy-first. We do not require you to create an account, and we do not collect any personally identifiable information when you use our core downloading service. We temporarily process the URLs you submit solely for the purpose of fetching the requested media.</p>
          
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">2. Log Files and Analytics</h2>
          <p>Like most standard websites, we use log files and basic analytics to understand how visitors interact with our site. This information includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, and date/time stamps. This data is not linked to any information that is personally identifiable.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">3. Cookies</h2>
          <p>We may use cookies to enhance your experience, such as saving your theme preferences (light/dark mode). You can choose to disable cookies through your individual browser options.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">4. Third-Party Services</h2>
          <p>Our service interacts with third-party platforms (like YouTube, TikTok, etc.) to fetch media. We are not responsible for the privacy practices of these external platforms. We also may use third-party advertising partners that use cookies to serve ads based on your prior visits to our website.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">5. Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. We advise you to review this page periodically for any changes. Changes are effective immediately after they are posted on this page.</p>

          <p className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            If you have any questions about our Privacy Policy, please contact us at <a href="mailto:adroitahmadzaki@gmail.com" className="text-indigo-500 hover:underline">adroitahmadzaki@gmail.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
