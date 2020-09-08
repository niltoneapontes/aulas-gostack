import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Nilton',
    email: 'nilton@nilton.com',
    password: '123456789',
    techs: ['NodeJS', 
    'ReactJS', 
    'React-native',
    { tech: 'VueJS', experience: 100 }
  ]
  });

  return response.json({ message: "Hi there, my name is Nilton"})
}