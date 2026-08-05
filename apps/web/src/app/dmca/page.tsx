export default function DMCA() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900/50 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800/50 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">DMCA Copyright Policy</h1>
        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
          <p>SnapVid respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond expeditiously to claims of copyright infringement.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">1. How Our Service Works</h2>
          <p>It is important to understand that SnapVid does not host, store, or archive any media files (videos, audio, or images) on our servers. Our service functions merely as a conduit, passing standard HTTP requests from the user to the original content provider's servers. The downloaded files are transmitted directly from the source server to the user's device.</p>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">2. Submitting a Takedown Notice</h2>
          <p>Since we do not host the content, we cannot delete it from the internet. If you are a copyright owner and find your content being accessed improperly, your primary recourse must be to contact the original hosting platform (e.g., YouTube, TikTok, Instagram) to have the source file removed.</p>
          <p>However, we are willing to block specific URLs from being processed by our tool upon receiving a valid DMCA notice. To request a URL block, please provide a written communication to our designated copyright agent at <a href="mailto:adroitahmadzaki@gmail.com" className="text-indigo-500 hover:underline">adroitahmadzaki@gmail.com</a> that includes the following:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the material that is claimed to be infringing, including the exact URL(s) to be blocked.</li>
            <li>Information reasonably sufficient to permit us to contact the complaining party (email address).</li>
            <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized.</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner.</li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-8">3. Repeat Infringers</h2>
          <p>SnapVid does not currently use a user account system, but we reserve the right to ban IP addresses of users who repeatedly misuse our service to violate copyright laws.</p>
        </div>
      </div>
    </main>
  );
}
