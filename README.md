# Sending SMS from Web with Express and Nexmo

Simple web app written in Node.js with Express.

## Running This Demo Locally on Your Machine

### 1. Install dependencies

```bash
$ npm install
```

### 2. Set up Your Credentials

Sign up at [Nexmo](https://nexmo.com) to get your own API keys and a virtual number.

Create `config.js` in `/server`. The file should include the credentials.

```javascript
module.exports = {
  api_key: 'f321a...',
  api_secret: '18e9aad...',
  number: '14155551234'
};
```

### 3. Run the Node App

```bash
$ node server/index.js
```

### 4. Launch it on Browser

Go to [http://localhost:4000](http://localhost:4000) and send text messages.
