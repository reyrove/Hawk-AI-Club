# **Sparrow Hawk on Replit** 

Welcome to **Sparrow Hawk on Replit** — your personal wizard for turning prompts into code! This lightweight, snazzy app leverages OpenAI’s GPT-3.5 Turbo to make your coding dreams come true. It's built with **Node.js**, **Express**, and a sprinkle of frontend magic. Dive in and let’s make some code happen!

## Features 
- **Dynamic Code Generation:** Input a prompt, get clean, functional code. It's that easy.
- **Intuitive Frontend:** A sleek, minimalistic UI for seamless interaction.
- **Powered by OpenAI:** Backed by the cutting-edge GPT-3.5 Turbo model.
- **Express Server Goodness:** A robust backend to handle API requests like a champ.

## Tech Stack 
- **Frontend:** Vanilla HTML, CSS, and JavaScript (because classics never go out of style).
- **Backend:** Node.js with Express.
- **API:** OpenAI Chat Completions API.

## Setup & Installation 
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)

### Clone the Repository
```bash
$ git clone https://github.com/your-username/sparrow-hawk-on-replit.git
$ cd sparrow-hawk-on-replit
```

### Install Dependencies
```bash
$ npm install
```

### Start the Server
```bash
$ npm start
```
Your app will be live at [http://localhost:3000](http://localhost:3000)!

### Environment Variables
Replace the hardcoded `apiKey` in `index.js` with an environment variable for better security. Create a `.env` file in the root directory and add:
```
OPENAI_API_KEY=your-super-secret-api-key
```
Then update `index.js` to use:
```javascript
const apiKey = process.env.OPENAI_API_KEY;
```
Don't forget to install `dotenv`:
```bash
$ npm install dotenv
```
And include it at the top of your `index.js` file:
```javascript
import dotenv from 'dotenv';
dotenv.config();
```

## How It Works 
1. **Type Your Prompt:** Enter a prompt describing what code you need.
2. **Hit Generate:** The app sends your prompt to OpenAI’s API via a POST request.
3. **Boom, Magic Happens:** The AI responds with code, which is then displayed in a slick `<pre>` tag.

## File Structure 
```plaintext
.
├── index.js        # The Express server and main app logic
├── index.html      # The frontend UI
├── package.json    # Node.js dependencies and scripts
└── README.md       # This cool guide
```

## Troubleshooting 🔧
- **Error: `No web server is currently running`:** Ensure the server is started with `npm start`.
- **CORS Issues:** Double-check your API endpoint URLs.
- **API Key Problems:** Ensure your OpenAI API key is correct and has access to GPT-3.5 Turbo.

## Future Enhancements 
- Add user authentication to save generated code.
- Implement dark mode for night owls.
- Add a copy-to-clipboard button for quick sharing.
- Increase token limit for longer code responses.

## License 
MIT License — because sharing is caring. Feel free to fork, tweak, and conquer.

## Contributing 
Found a bug or have a brilliant idea? Open an issue or submit a pull request. Let’s make Sparrow Hawk even cooler, together!

## Acknowledgments 
Thanks to:
- [OpenAI](https://openai.com) for their groundbreaking API.
- [Replit](https://replit.com) for making coding on the go so smooth.

---
### Now go ahead and unleash your inner coding wizard! 
