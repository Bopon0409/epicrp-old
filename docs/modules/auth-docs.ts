export interface AuthDocs {
  // Авторизация
  'auth.signIn': [login: string, pass: string, checkBox: boolean]
  // Регистрация
  'auth.signUp': [login: string, email: string, pass: string]
}