import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1';
export const PROJECT_ID = '66587f59003a3dc35a1e';
export const DATABASE_ID = '665999ea0028d0f501a9';
export const COLLECTION_ID_USERS = '6659a5ae0027611de231'; // Replace with your actual collection ID for users
export const COLLECTION_ID_MESSAGES = '665b5dbe003e757a8809';

const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export default client;





