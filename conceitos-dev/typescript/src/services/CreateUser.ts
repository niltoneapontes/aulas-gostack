/*
* Para criar: nome, e-mail e senha.
*/

interface TechObject {
  tech: string,
  experience: number
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject> // string[] poderia ser usado se só houvesse elementos do tipo string.
}

export default function createUser({ name = '', email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}