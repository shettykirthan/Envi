import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('66587f59003a3dc35a1e'); // Your project ID

export const account = new Account(client);