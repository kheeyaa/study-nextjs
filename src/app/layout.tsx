export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header>
          <h1>Demo Note</h1>
          <nav>
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
