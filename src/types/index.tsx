export interface RegisterConfig {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  birthdate: string;
}

export interface LoginConfig {
  username: string;
  password: string;
}

export interface UserConfig {
  isAuthenticated: boolean;
  id?: number;
  username?: string;
  roles?: Array<string>;
}

export interface ActivityConfig {
  type: string;
  description: string;
  startTime: string;
  endTime: string;
  duration?: string;
  user_id?: number;
}

export interface ReadingConfig {
  weight?: number;
  blood_pressure: number;
  temperature: number;
  oxygenLevel: number;
  pulse: number;
  timestamp: string;
  user_id?: number;
}
