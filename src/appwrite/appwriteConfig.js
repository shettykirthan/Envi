import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1';
export const PROJECT_ID = '66587f59003a3dc35a1e';
export const DATABASE_ID = '665999ea0028d0f501a9';
export const COLLECTION_ID_USERS = '66606a990031be0a04f1'; 
export const COLLECTION_ID_MESSAGES = 'messages123';
export const COLLECTION_ID_CHANNELS = '66606ca800173b3415dc';

const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export default client;





