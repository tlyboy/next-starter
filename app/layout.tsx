import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

export const metadata: Metadata = {
  title: 'Next starter',
  description: 'Next starter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex h-full flex-col items-center justify-center gap-4">
              {children}

              <div className="flex items-center gap-2 text-xl">
                <a
                  className="i-carbon-logo-github icon-btn"
                  href="https://github.com/tlyboy/next-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>

                <ModeToggle />
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
