import type { Metadata } from "next";
import { PyroButton } from "@/components/ui/PyroButton";
import SafariBrowser from "@/components/ui/SafariBrowser";
import GitHubStats from "@/components/ui/GitHubStats";
import { 
  BookOpenIcon, 
  FireIcon, 
  UserGroupIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  CubeIcon, 
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  metadataBase: new URL('https://pyrodactyl.dev'),
  title: "Pyrodactyl",
  description: "Pyrodactyl is an open, secure, and scalable servers platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
  openGraph: {
    title: "Pyrodactyl",
    description: "Pyrodactyl is an open, secure, and scalable servers platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
    images: [{ url: "/og_pyrodactyl.png" }],
  },
};

const features = [
  {
    title: "Built with Vite",
    description: "Pyrodactyl is built with Vite, the fastest and most reliable build tool for JavaScript.",
    icon: <FireIcon className="w-5 h-5" />
  },
  {
    title: "Accessibility at the core",
    description: "Pyro & Pyrodactyl are committed to making our software accessible to everyone. Pyrodactyl is no exception.",
    icon: <UserGroupIcon className="w-5 h-5" />
  },
  {
    title: "Optimized to pieces",
    description: "Pyrodactyl builds in less than 150 milliseconds, and renders up to 70% faster than the original panel.",
    icon: <RocketLaunchIcon className="w-5 h-5" />
  },
  {
    title: "Modern, scalable, and secure",
    description: "The only outdated aspect of Pyrodactyl is the name. Everything else is absolutely cutting-edge.",
    icon: <ShieldCheckIcon className="w-5 h-5" />
  },
  {
    title: "Batteries included",
    description: "It's everything you need, out-of-the-box. There's no need to install plugins or themes. (But you still can with [Blueprint](https://pyrodactyl.dev/docs/blueprint))",
    icon: <CubeIcon className="w-5 h-5" />
  },
  {
    title: "Open source",
    description: "Pyrodactyl is the first (and only) panel that a company has made its source publicly available.",
    icon: <CodeBracketIcon className="w-5 h-5" />
  },
];

const buildTimes = [
  { name: "Pyrodactyl", tech: "Vite + Turbo", time: "87ms", percentage: 0.22, highlight: true },
  { name: "Pterodactyl v1", tech: "Webpack 4", time: "35.3s", percentage: 88 },
  { name: "Pterodactyl v2", tech: "Webpack 4", time: "39.4s", percentage: 98 },
];

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const PyrodactylLogo = () => (
  <svg aria-label="Pyrodactyl logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 61" className="w-6 h-6" fill="none">
    <path fill="#f94943" fillRule="evenodd" d="M.221 5.894c2.105 4.942 3.762 10.569 3.518 15.349-.124 2.415 2.375 5.89 4.683 6.683 2.568.881 4.998 2.762 6.208 6.329.66 1.942 3.005 3.258 4.995 2.696 4.253-1.203 9.98-1.256 14.475 3.247.529.53.764 1.286.597 2.012a15.343 15.343 0 01-10.022 10.946c-1.798.623-2.37 2.472-.468 2.575 2.41.13 6.157-.897 11.586-4.603.3-.205.71-.175.968.08.228.225.284.57.14.854l-.644 1.276c-.47.93-.358 2.043.287 2.864l.73.93c.431.549.54 1.28.285 1.928l-.192.49c-.14.353-.077.754.162 1.05.485.6 1.434.51 1.793-.172l.329-.623c.187-.355.445-.597.801-.407.717.382 2.333.346 2.279-.458l-.002-.029a.74.74 0 00-.22-.5L40.47 56.33a2.679 2.679 0 01-.396-3.238l.93-1.579a1.478 1.478 0 00-.104-1.656 1.48 1.48 0 01.292-2.097l.93-.69a1.89 1.89 0 012.297.036c.71.562.91 1.548.474 2.339l-.027.05a1.909 1.909 0 00.22 2.162l1.67 1.958c.405.476.502 1.139.25 1.709l-.165.375a.974.974 0 00.155 1.032.997.997 0 001.656-.232l.312-.68c.136-.296.445-.486.761-.398.091.026.186.057.282.095.69.27 2.127.084 2.052-.647a.675.675 0 00-.2-.402l-2.52-2.423a2.68 2.68 0 01-.523-3.172l.414-.796c.417-.802.408-1.762-.115-2.502a19.405 19.405 0 00-.56-.752c-.843-1.077-1.013-2.612-.04-3.576 3.14-3.11 8.802-6.355 15.662-4.248 2.002.614 4.458-.647 5.178-2.596.796-2.157 2.177-4.31 4.396-5.684 2.262-1.4 6.302-6.74 6.465-9.377.228-3.701 1.408-8.64 4.302-14.947 1.104-2.407-1.49-5.198-3.953-4.176C75.77 2.205 69.92 4.458 64.573 6.11c-1.138.352-1.935 1.377-1.96 2.557l-.183 8.996c-.008.393-.095.781-.308 1.112-1.138 1.767-4.333 5.01-10.452 7.749-1.31.586-2.828-.035-3.426-1.33l-.826-1.79c-1.06-2.565.04-5.525 6.322-6.655l.017-.003c.025-.004.04-.007.068-.017l.033-.012c.565-.203 1.4-.503 1.43-1.086.061-1.177-.167-2.505-1.224-2.907a1.529 1.529 0 00-.547-.078h-9.795c-.212 0-.424.02-.626.087-1.419.465-3.466 1.923-5.226 3.175-1.36.967-2.547 1.813-3.14 1.983a.5.5 0 01-.142.017c-.54 0-.847.572-.46.943.823.788 2.085 1.456 3.651 1.142 1.366-.274 2.94-.274 3.674.9 1.309 2.095 2.165 4.855.056 6.647-.361.307-.835.439-1.31.433-4.32-.057-12.867-1.902-18.27-9.031a2.514 2.514 0 01-.496-1.523v-8.77c0-1.227-.833-2.297-2.025-2.636A156.196 156.196 0 014.896 1.071C2.294.032-.869 3.334.221 5.894zM43.993 15.92a.823.823 0 00.827-.82.823.823 0 00-.827-.818.823.823 0 00-.827.819c0 .452.37.819.827.819z" clipRule="evenodd" />
  </svg>
);

const Page = () => {
  return (
    <>
      {/* hero */}
      <section className="relative min-h-[100vh] w-full bg-[#09090b]">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative container mx-auto px-6 pt-40 pb-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <h1 className="font-extrabold text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] tracking-[-0.04em] text-white mb-6 font-[family-name:var(--font-display)]">
              Open, Secure, and <span className="text-brand">Powerful</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
              Pyrodactyl is the world's best Pterodactyl panel. Unmatched performance and features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <PyroButton variant="primary" size="large" href="/docs/pyrodactyl" isArrow>
                <BookOpenIcon className="w-5 h-5" /> Get Started
              </PyroButton>
              <div className="flex flex-col items-center gap-2">
                <PyroButton variant="quaternary" size="large" href="https://github.com/pyrodactyl-oss/pyrodactyl" external>
                  <GitHubIcon /> Star on GitHub
                </PyroButton>
                <GitHubStats />
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <SafariBrowser
              src="/panelscreenshots/pyrodactyl-server.png"
              width={1920}
              height={1080}
              alt="Pyrodactyl server management interface"
              url="panel.pyro.host"
            />
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="relative z-10 w-full bg-[#09090b] border-t border-white/5 mt-[-250px]">
        <div 
          className="absolute -top-24 left-0 right-0 h-24 pointer-events-none" 
          style={{
            background: 'linear-gradient(to top, #09090b 0%, rgba(9,9,11,0.95) 40%, rgba(9,9,11,0.7) 70%, rgba(9,9,11,0) 100%)'
          }}
        />
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-sm font-medium text-white/40 mb-6">Performance metrics</p>
              
              <h2 className="font-extrabold text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.04em] mb-8 font-[family-name:var(--font-display)]">
                <span className="block text-white">170×</span>
                <span className="block text-[0.6em] text-white/40">smaller footprint</span>
              </h2>
              
              <h2 className="font-extrabold text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.04em] mb-8 font-[family-name:var(--font-display)]">
                <span className="block text-brand">17×</span>
                <span className="block text-[0.6em] text-white/40">faster builds</span>
              </h2>
              
              <p className="text-white/50 text-lg max-w-md leading-relaxed">
                We rebuilt Pterodactyl from the ground up. The result? Unprecedented performance that no other panel can match.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-sm font-medium text-white/40 mb-8">Build time comparison</h3>
              
              {buildTimes.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`font-semibold ${item.highlight ? 'text-brand' : 'text-white/70'}`}>
                        {item.name}
                      </span>
                      <span className="text-xs text-white/30 font-mono">{item.tech}</span>
                    </div>
                    <span className={`font-mono text-sm ${item.highlight ? 'text-brand' : 'text-white/50'}`}>
                      {item.time}
                    </span>
                  </div>
                  
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${item.highlight ? 'bg-brand' : 'bg-white/20'}`}
                      style={{ width: `${item.percentage}%`, minWidth: item.highlight ? '4px' : undefined }}
                    />
                  </div>
                </div>
              ))}
              
              <p className="text-xs text-white/30 pt-4 leading-relaxed">
                Benchmarked on MacBook Pro M3 Max, 48GB RAM. Caching enabled for all builds. 
                Results may vary based on configuration. Note: These benchmarks were done in 2024 and may not represent current build times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6 font-[family-name:var(--font-display)]">
              Built for the modern era
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Every aspect of Pyrodactyl has been carefully designed to deliver the best possible experience for server administrators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-brand">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* easy switch */}
      <section className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-3 font-mono text-base lg:text-lg">
              <div>
                <span className="inline-block bg-red-500/10 rounded px-3 py-1.5 text-red-300/80">ghcr.io/pterodactyl/panel:latest</span>
              </div>
              <div>
                <span className="inline-block bg-green-500/10 rounded px-3 py-1.5 text-green-300/80">ghcr.io/pyrodactyl-oss/pyrodactyl:latest</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-white/40 mb-6">Migration made simple</p>
              
              <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6 font-[family-name:var(--font-display)]">
                Switch in <span className="text-brand">one line</span>
              </h2>
              
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Already running Pterodactyl with Docker? Just change the image in your compose file and run <code className="text-brand">docker compose up -d</code>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <PyroButton variant="primary" href="/docs/pyrodactyl/migrations" isArrow>Migration Guide</PyroButton>
                <PyroButton variant="quaternary" href="/docs/pyrodactyl/installation">Fresh Install</PyroButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* open source */}
      <section className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-sm font-medium text-white/40 mb-6">Transparent development</p>
              
              <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6 font-[family-name:var(--font-display)]">
                Fully <span className="text-brand">open source</span>
              </h2>
              
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Unlike other panels, Pyrodactyl&apos;s entire codebase is publicly available. 
                Audit the code, contribute improvements, or fork it for your own needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <PyroButton variant="quaternary" href="https://github.com/pyrodactyl-oss/pyrodactyl" external>
                  <GitHubIcon /> View on GitHub
                </PyroButton>
                <PyroButton variant="quaternary" href="https://github.com/pyrodactyl-oss/pyrodactyl/blob/main/LICENSE.md" external>
                  <CodeBracketIcon className="w-5 h-5" /> AGPL-3.0 License
                </PyroButton>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <pre className="text-sm font-mono text-[13px] leading-relaxed text-white/40">
                <code>
<span className="text-white/30">&lt;?php</span>{`

`}<span className="text-purple-400/70">namespace</span>{` Pterodactyl\\Listeners\\Auth;

`}<span className="text-purple-400/70">class</span>{` `}<span className="text-yellow-300/70">PasswordResetListener</span>{`
{
    `}<span className="text-purple-400/70">public function</span>{` `}<span className="text-blue-400/70">handle</span>{`($event): void
    {
        Activity::`}<span className="text-blue-400/70">event</span>{`(`}<span className="text-green-400/70">'password-reset'</span>{`)
            ->`}<span className="text-blue-400/70">subject</span>{`($event->user)
            ->`}<span className="text-blue-400/70">log</span>{`();
    }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6 font-[family-name:var(--font-display)]">
              Ready to get started?
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Join the growing number of people using Pyrodactyl and deploy in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PyroButton variant="primary" size="large" href="/docs/pyrodactyl" isArrow>
                <BookOpenIcon className="w-5 h-5" /> Read the Docs
              </PyroButton>
              <PyroButton variant="quaternary" size="large" href="https://github.com/pyrodactyl-oss/pyrodactyl" external>
                <GitHubIcon /> View Source
              </PyroButton>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <PyrodactylLogo />
              <span className="text-white/40 text-sm">© {new Date().getFullYear()} Pyro Inc and its contributors.</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="/docs/pyrodactyl" className="text-white/40 hover:text-brand text-sm transition-colors">Documentation</a>
              <a href="https://github.com/pyrodactyl-oss/pyrodactyl" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand text-sm transition-colors">GitHub</a>
              <a href="https://github.com/pyrodactyl-oss/pyrodactyl/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand text-sm transition-colors">License</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
