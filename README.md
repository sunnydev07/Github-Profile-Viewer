# GitHub Profile Viewer

A React-based web app that fetches and displays random GitHub user profiles using the [GitHub REST API](https://docs.github.com/en/rest). You can control how many profiles are loaded at once and jump directly to any user's GitHub page.

---

## ✨ Features

- 🔍 Fetches random GitHub user profiles via the GitHub public API
- 🔢 Set the number of profiles to display
- 🖼️ Shows each user's avatar, username, and a direct link to their GitHub profile
- ⚡ Built with React 19 and bundled with Parcel 2

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI components and state management |
| Parcel 2 | Development server and bundler |
| GitHub REST API | Source of user profile data |
| CSS | Styling and responsive layout |

---

## 📁 Project Structure

```
Github-Profile-Viewer/
├── index.html          # App entry point
├── style.css           # Global styles
├── src/
│   └── main.js         # React root – renders the GithubProfile component
└── component/
    ├── Header.js       # Page heading / title bar
    └── Body.js         # Profile fetch logic and card grid
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sunnydev07/Github-Profile-Viewer.git
   cd Github-Profile-Viewer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open the URL shown in your terminal (usually `http://localhost:1234`) in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Create an optimised production build in `dist/` |
| `npm run lint` | Run ESLint across all source files |

---

## 🔧 How It Works

1. On load, the app automatically fetches a random batch of GitHub profiles using:
   ```
   GET https://api.github.com/users?since=<random_offset>&per_page=<count>
   ```
2. The `since` parameter is a random integer so you get a different set of users each time.
3. Enter the desired number of profiles in the input field and press **Enter** or click **View** to refresh the list.
4. Each card shows the user's avatar image, login name, and a **Profile** link that opens their GitHub page in a new tab.

---

## 🤝 Contributing

Pull requests are welcome! Feel free to open an issue for bugs, feature requests, or ideas.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

