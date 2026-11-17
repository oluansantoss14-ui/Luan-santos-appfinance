import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luan Finance",
  description: "Gestão financeira inteligente"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
