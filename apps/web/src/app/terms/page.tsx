export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900/50 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800/50 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Terms of Service</h1>
        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
          <p className="text-slate-500 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using SnapVid, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our service.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">2. Description of Service</h2>
          <p>SnapVid provides a web-based utility that allows users to download publicly available videos and audio from various internet platforms for personal, non-commercial use. We do not host, store, or broadcast any of the copyrighted media downloaded through our service.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">3. User Responsibilities</h2>
          <p>You agree to use our service only for lawful purposes. You are solely responsible for ensuring that you have the right to download the media you access through SnapVid. You must not use our service to download copyrighted material without the explicit permission of the copyright owner.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">4. Disclaimer of Warranties</h2>
          <p>The service is provided on an "AS IS" and "AS AVAILABLE" basis. SnapVid makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">5. Limitation of Liability</h2>
          <p>In no event shall SnapVid or its operators be liable for any damages arising out of the use or inability to use the materials on SnapVid's website, even if SnapVid has been notified orally or in writing of the possibility of such damage.</p>
        </div>
      </div>
    </main>
  );
}
