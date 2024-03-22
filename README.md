# Nyan Heroes Bot

This bot interacts with the Nyan Heroes API to perform various tasks such as getting tasks, clearing tasks, and fetching user profiles.

## Features

- **Get Tasks and Clear**: Fetches tasks from the Nyan Heroes API and clears them.
- **Get Profile**: Retrieves the user profile information from the Nyan Heroes API.

## Prerequisites

Before running the bot, make sure you have:

- Node.js installed on your machine
- API token from Nyan Heroes. Create a `.env` file in the root directory of the project and add your API token as follows:

```plaintext
TOKEN=your_api_token_here
```
````

## Obtaining API Token

To obtain the API token, follow these steps:

1. Open your browser and go to the Nyan Heroes website.
2. Log in to your account.
3. Open the developer tools (F12 or right-click and select "Inspect").
4. Navigate to the "Network" tab.
5. Refresh the page.
6. Look for any requests to the Nyan Heroes API. They usually start with "api.nyanheroes.com".
7. Click on the request and navigate to the "Headers" section.
8. Look for the "Authorization" header.
9. Copy the token after the word "Bearer".

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dante4rt/nyan-heroes-bot.git
```

2. Install dependencies:

```bash
cd nyan-heroes-bot
npm install
```

## Usage

To start the bot, run:

```bash
npm start
```

Follow the prompts to choose an option:

1. Get Tasks and Clear
2. Get Profile