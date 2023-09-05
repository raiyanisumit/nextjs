import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOption = {
  providers: [
    GithubProvider({
      clientId: "Iv1.d20d8d1fce77fc85",
      clientSecret: "39c2b99dd222a3f37fb1714dc2c6cbb15365a0c7",
    }),
  ],
};

export default NextAuth(authOption);
