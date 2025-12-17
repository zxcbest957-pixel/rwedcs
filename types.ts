
export interface User {
  email: string;
  name: string;
  isLoggedIn: boolean;
}

export interface SecurityInsight {
  tip: string;
  level: 'info' | 'warning' | 'success';
}
