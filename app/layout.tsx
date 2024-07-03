"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./_lib/redux/store";
import ThemeProvider from "./_lib/providers/ThemeProvide";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background">
        <Provider store={store}>
          <ThemeProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
