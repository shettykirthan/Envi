import { Client, Account, Databases } from 'appwrite';
import { PROJECT_ID } from './appwriteConfig';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite server endpoint
    .setProject(PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
