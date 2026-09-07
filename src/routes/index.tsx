import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RM App v2 Prototype" },
      {
        name: "description",
        content:
          "Clickable prototype for the RM App v2 + Manager Dashboard (CTM/ZTM portal).",
      },
      { property: "og:title", content: "RM App v2 Prototype" },
      {
        property: "og:description",
        content:
          "Clickable prototype for the RM App v2 + Manager Dashboard (CTM/ZTM portal).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          Clickable prototype
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          RM App v2 + Manager Dashboard
        </h1>
        <p className="text-base text-muted-foreground">
          Review the uploaded prototype. It includes the RM App phone flow and
          the CTM/ZTM manager portal.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/prototype.html"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open prototype
          </a>
        </div>
      </div>
    </main>
  );
}
