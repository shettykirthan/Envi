import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1';
export const PROJECT_ID = '6659f3d8001210f0a689';
export const DATABASE_ID = '6659f408000986335d75';
export const COLLECTION_ID_USERS = '6659f41800350bdab4d4'; 
export const COLLECTION_ID_MESSAGES = '665d50bf002733dba8e4';

export const COLLECTION_ID_CHANNELS = '665ef3170006dc29f72a';

const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export default client;





