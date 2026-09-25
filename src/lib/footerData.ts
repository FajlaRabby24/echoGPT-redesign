export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Available Models", href: "#models" },
      { label: "Product Preview", href: "#preview" },
      { label: "Why EchoGPT", href: "#why-us" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Model Auto-Router", href: "#features" },
      { label: "Parallel Inference", href: "#preview" },
      { label: "Artifact Sandbox", href: "#preview" },
      { label: "Enterprise Security", href: "#why-us" },
      { label: "API Integrations", href: "#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About EchoGPT", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact Support", href: "#" },
    ],
  },
];
