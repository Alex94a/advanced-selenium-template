# Advanced Selenium Template

A robust Selenium automation framework with enhanced browser control, anti-detection capabilities, and resilient page interaction methods.

## 🌟 Key Features

- **Smart Page Loading**: Implements intelligent timeout handling and page load interruption to prevent hanging on slow-loading resources
- **Anti-Detection Measures**: Built-in support for browser fingerprinting and proxy integration
- **Resilient Element Interactions**: Fallback JavaScript-based methods for clicking and inputting when standard Selenium approaches fail
- **Profile Management**: Built-in browser profile handling for persistent sessions

## 🛠️ Technology Highlights

This framework leverages:
- **CheshireCat/selenium-with-fingerprints**: A powerful library that enhances Selenium with browser fingerprinting and proxy support


## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Chrome browser installed
- Basic knowledge of Selenium WebDriver

### Basic Usage

```javascript
import { SessionManager } from './src/services/session.js';

const manager = new SessionManager();
const { actions } = await manager.createSession('my-session', {
    headless: false,
    proxy: "default",
    fingerprint: "default"
});

// Navigate with smart timeout handling
await actions.navigate('https://example.com');

// Resilient element interactions
await actions.click('//button[@id="submit"]');
```

## 🛠️ Core Components

### SessionManager

Handles creation and management of browser sessions with configurable options:

```javascript
const sessionConfig = {
    headless: false,        // Run in headless mode
    proxy: "user:pass@ip:port", // Proxy configuration
    fingerprint: "fetch"    // Browser fingerprint mode
};
```

### SessionActions

Provides enhanced interaction methods:

- `navigate(url, timeout)`: Smart page navigation with timeout handling
- `click(selector)`: Resilient element clicking with retries
- `emulateClick(selector)`: JavaScript-based clicking fallback
- `input(selector, keys)`: Human-like text input simulation
- `emulateInput(selector, keys)`: JavaScript-based input fallback
- `selectOption(selector, value)`: Enhanced dropdown selection

## 🔧 Configuration

## Proxy

- `"ip:port"` — anonymous proxy
- `"username:password@ip:port"` — authenticated proxy
- `"default"` — system settings
- `"database"` — rotation from database

## Fingerprint

- `"default"` — default fingerprint
- `"fetch"` — new fingerprint from service
- `"database"` — stored fingerprint
- `fingerprint value` — custom fingerprint

## 💡 Best Practices

1. Always use session management:
```javascript
try {
    const { actions } = await manager.createSession(sessionId, config);
    // Your automation code
} finally {
    await manager.closeSession(sessionId);
}
```

2. Implement appropriate delays:
```javascript
import { randomDelay } from './src/utils/delay.js';
await randomDelay(0.3); // Adds natural delay between actions
```

3. Use enhanced selectors when standard methods fail:
```javascript
// Standard click not working? Try emulated click
await actions.emulateClick('//button[@id="submit"]');
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.