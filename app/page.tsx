const features = [
  {
    title: "Native Egnyte nodes",
    description:
      "Custom nodes appear inside ComfyUI, so your cloud drive is part of every graph.",
  },
  {
    title: "Read and write in place",
    description:
      "Load and save images, models, and renders directly to Egnyte without exports.",
  },
  {
    title: "Full-scope client access",
    description:
      "The plugin uses your existing Egnyte permissions and policies, no shadow copies.",
  },
  {
    title: "Version-safe outputs",
    description:
      "Keep clean naming and versions so teams can trace every render and revision.",
  },
  {
    title: "Artist-first browsing",
    description:
      "Preview folders and assets from a visual browser that stays in your flow.",
  },
  {
    title: "Studio collaboration",
    description:
      "Hand off outputs to teammates instantly with shared folders and audit trails.",
  },
];

const steps = [
  {
    title: "Install the Egnyte plugin",
    description:
      "Drop the plugin into ComfyUI and enable the Egnyte node pack.",
  },
  {
    title: "Connect your Egnyte drive",
    description:
      "Sign in once and keep full-scope access to your existing folders.",
  },
  {
    title: "Browse, read, and write",
    description:
      "Use nodes to pull inputs, push outputs, and keep everything organized.",
  },
  {
    title: "Share and iterate",
    description:
      "Versions and permissions stay intact for clean collaboration and reviews.",
  },
];

const nodeList = [
  "Egnyte Browser",
  "Egnyte Read",
  "Egnyte Write",
  "Egnyte Versions",
  "Egnyte Publish",
];

const artistBenefits = [
  "Keep large assets in Egnyte and stream only what you need.",
  "Publish finals and WIP renders with clear version naming.",
  "Coordinate with producers and teams without manual uploads.",
  "Maintain a single source of truth for assets and prompts.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
              E
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Egnyte for ComfyUI
              </p>
              <p className="text-xs text-slate-500">
                Plugin and custom nodes for artists
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-slate-900" href="#features">
              Features
            </a>
            <a className="transition hover:text-slate-900" href="#workflow">
              Workflow
            </a>
            <a className="transition hover:text-slate-900" href="#artists">
              For artists
            </a>
            <a className="transition hover:text-slate-900" href="#security">
              Security
            </a>
          </div>
          <a
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
            href="#get-access"
          >
            Get the plugin
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-24">
            <div className="flex flex-col gap-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Egnyte plugin for ComfyUI
              </div>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  Egnyte inside ComfyUI. Read and write your drive in every node.
                </h1>
                <p className="text-lg text-slate-600">
                  Native, full-scope Egnyte client delivered as a plugin and
                  custom nodes for ComfyUI. Artists can browse, load, and save
                  assets without leaving their graph.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
                  href="#get-access"
                >
                  Get the plugin
                </a>
                <a
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                  href="#workflow"
                >
                  See how it works
                </a>
              </div>
              <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-halo">
                  <p className="font-semibold text-slate-900">No manual sync</p>
                  <p>Read and write in place with live Egnyte folders.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-halo">
                  <p className="font-semibold text-slate-900">
                    Built for teams
                  </p>
                  <p>Keep permissions, versions, and audit trails intact.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Egnyte Drive
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      Studio Assets
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Connected
                  </span>
                </div>
                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span>Characters / hero_female_v04.png</span>
                    <span className="text-xs text-slate-400">Read</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span>Renders / city_lighting_v12.exr</span>
                    <span className="text-xs text-slate-400">Write</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <span>Prompts / style_guides.pdf</span>
                    <span className="text-xs text-slate-400">Read</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-soft">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Custom nodes
                </p>
                <p className="mt-2 text-lg font-semibold">Egnyte node pack</p>
                <div className="mt-5 space-y-3 text-sm text-slate-200">
                  {nodeList.map((node) => (
                    <div
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      key={node}
                    >
                      <span>{node}</span>
                      <span className="text-xs text-slate-400">Node</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 py-20" id="features">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Features
              </p>
              <h2 className="text-balance text-3xl font-semibold text-slate-900 md:text-4xl">
                Everything you need to keep ComfyUI connected to Egnyte.
              </h2>
              <p className="max-w-2xl text-lg text-slate-600">
                Designed for artists who want clean asset management without
                slowing down creative exploration.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-halo transition hover:-translate-y-1"
                  key={feature.title}
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20" id="workflow">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Workflow
              </p>
              <h2 className="text-balance text-3xl font-semibold text-slate-900 md:text-4xl">
                Set up in minutes, stay in flow for every project.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-halo"
                  key={step.title}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-sm font-semibold text-slate-700">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" id="artists">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                For artists
              </p>
              <h2 className="text-balance text-3xl font-semibold text-slate-900 md:text-4xl">
                A clean bridge between your creative graph and your cloud
                library.
              </h2>
              <p className="text-lg text-slate-600">
                Egnyte keeps your production files organized while ComfyUI keeps
                your ideas moving. The plugin connects them with zero friction.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                {artistBenefits.map((benefit) => (
                  <li
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-halo"
                    key={benefit}
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Artist friendly
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                See the drive. Pick the asset. Render and publish.
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                No file juggling. No manual uploads. Your outputs land directly
                in shared Egnyte folders so producers, directors, and teammates
                can review instantly.
              </p>
              <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Example output path
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  /Egnyte/Studios/Project_Atlas/Renders/scene_08_v23.exr
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white" id="security">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Security and control
              </p>
              <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                Enterprise-grade access, straight from Egnyte.
              </h2>
              <p className="text-sm text-slate-300">
                The plugin is a native, full-scope Egnyte client inside ComfyUI.
                It respects your existing permissions, retention, and audit
                policies. No extra storage layers, no duplicated assets.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Single sign-on ready with your current Egnyte settings.",
                "Full audit trail of every read and write action.",
                "Granular folder permissions for teams and freelancers.",
                "Secure access for on-site and remote production.",
              ].map((item) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" id="get-access">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-soft md:p-14">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Get access
                  </p>
                  <h2 className="text-balance text-3xl font-semibold text-slate-900 md:text-4xl">
                    Bring Egnyte into every ComfyUI workflow.
                  </h2>
                  <p className="text-lg text-slate-600">
                    Start with the plugin, add the custom nodes, and keep your
                    team creating from the same source of truth.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
                    type="button"
                  >
                    Request access
                  </button>
                  <a
                    className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                    href="#workflow"
                  >
                    View setup guide
                  </a>
                  <p className="text-center text-xs text-slate-500">
                    Available for studios and independent artists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Egnyte for ComfyUI. Built for creative pipelines.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-slate-900" href="#features">
              Features
            </a>
            <a className="transition hover:text-slate-900" href="#security">
              Security
            </a>
            <a className="transition hover:text-slate-900" href="#get-access">
              Get access
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
