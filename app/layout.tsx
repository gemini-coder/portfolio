import './globals.css';
import TopNavBar from './layout/TopNavbar';

export const metadata = {
  title: 'Gemini Coder Portfolio',
  description: 'Gemini Coder Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
      </body>
    </html>
  );
}
