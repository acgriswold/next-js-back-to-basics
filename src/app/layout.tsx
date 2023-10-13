import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Next App',
    description: 'Back to the basics',
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Next App</title>
        </head>
        <body>
            <div id="app">{children}</div>
        </body>
    </html>
    )
  }