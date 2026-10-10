import type { Metadata } from "next";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { serializeJsonLd } from "@/lib/json-ld";
import { experience } from "@/lib/profile";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  worksFor: { "@type": "Organization", name: experience[0].company },
  description: siteConfig.description,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  address: { "@type": "PostalAddress", addressCountry: "AR" },
  sameAs: Object.values(siteConfig.social),
  knowsAbout: ["Vue.js", "PHP", "SQL", "MySQL", "Next.js", "React", "TypeScript", "PostgreSQL"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd) }}
      />
      <Hero />
      <Projects />
      <Experience />
      <Stack />
      <About />
    </>
  );
}
