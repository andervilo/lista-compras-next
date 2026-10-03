import "./globals.css";
export const metadata={title:"Minha Lista",description:"Listas de compras simples e pessoais"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}