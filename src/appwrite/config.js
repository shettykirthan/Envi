import { Client, Account, Databases } from 'appwrite';

const client = new Client();



client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite server endpoint
    .setProject('66587f59003a3dc35a1e'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
