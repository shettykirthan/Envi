from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Set up the endpoint, project ID, and secret key
endpoint = 'https://cloud.appwrite.io/v1'
project_id = '66587f59003a3dc35a1e'
secret_key = 'faedd8aa6300c48974f36f003af1c95005e054696bd1351c938fd9033627125c20e02ad2bec5919e585429a4fad3486d85d5dd902aac5228cf296b4c820688e764c592a653f728f47073e48f43e572cfbf624d6549f9c7438d06545cf7389778345b63858169bc59fd10bba10d67b4351e580678fca978e4f7cb6edf61789ee0'

@app.route('/predict', methods=['POST'])
def predict():
    # Fetch data from the database endpoint using Appwrite API
    url = f"{endpoint}/databases/665999ea0028d0f501a9/collections/66606a990031be0a04f1/documents"
    headers = {
        'Content-Type': 'application/json',
        'X-Appwrite-Project': project_id,
        'X-Appwrite-Key': secret_key,
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        # Extract relevant data from the response
        data = response.json()["documents"]
        df = pd.DataFrame(data)

        # Prepare the data for linear regression
        df['Date'] = pd.to_datetime(df['Date'])  # Convert Date column to datetime
        df['month_index'] = np.arange(1, len(df) + 1)  # Add a month index

        # Define the independent (X) and dependent (y) variables
        X = df['month_index'].values.reshape(-1, 1)
        y = df['totalFootprint'].values

        # Initialize and fit the linear regression model
        model = LinearRegression()
        model.fit(X, y)

        # Predict the next month's footprint
        next_month_index = len(df) + 1
        next_month_forecast = model.predict([[next_month_index]])[0]

        # Ensure the forecasted value is non-negative
        next_month_forecast = max(0, next_month_forecast)

        return jsonify({"forecast": next_month_forecast})
    else:
        return jsonify({"error": "Failed to fetch data from the database."}), 500

if __name__ == '__main__':
    app.run(debug=True)
