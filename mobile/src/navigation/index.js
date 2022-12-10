import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import Navigation from "./Navigation";

import { AuthProvider } from "./AuthProvider";

export default function Provider() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
