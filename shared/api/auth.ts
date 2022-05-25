import { API } from "./base";
import { User } from "./types";

class AuthFetcher extends API {
  login<R = User>(email: string, password: string) {
    return super.post<R>({
      path: "login",
      params: {
        user: {
          email,
          password,
        },
      },
    });
  }

  signup<R = User>(email: string) {
    return super.post<R>({
      path: "signup",
      params: {
        user: {
          email,
        },
      },
    });
  }

  verifyEmail(id: number, code: string) {
    return super.post<void>({
      path: `users/${id}/verify_email`,
      params: {
        code,
      },
    });
  }

  logout() {
    return super.delete<void>({
      path: "logout",
    });
  }
}

export const authFetcher = new AuthFetcher();
