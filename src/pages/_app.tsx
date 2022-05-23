import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Connect,
  AuthOptions,
  AppConfig,
  UserSession,
} from "@stacks/connect-react";

import { SessionProvider } from "next-auth/react";

export const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });
export const appDetails = {
  name: "Test App",
  icon: "https://app.sigle.io/icon-192x192.png",
};

function MyApp({ Component, pageProps }: AppProps) {
  const authOptions: AuthOptions = {
    redirectTo: "/",
    appDetails,
    userSession,
  };

  return (
    <Connect authOptions={authOptions}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </Connect>
  );
}

export default MyApp;
