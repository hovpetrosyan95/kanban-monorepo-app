# ⚡️ Monorepo (Nuxt 3 + Capacitor) App for Kanban Board

cross-platform Kanban system using a shared UI architecture.

## 🏗 Project Structure

- **`packages/ui`**: The "Core". Contains all Pages (it's configured so that both mobile and web uses pages), Components, Composables, and Pinia Stores.
- **`packages/web`**: Web-only entry point and deployment configuration.
- **`packages/mobile`**: Capacitor-native wrapper for iOS and Android.

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [pnpm](https://pnpm.io) installed globally:

```bash
npm install -g pnpm
```

### 2. Installation

Install dependencies for all workspace packages from the root:

```bash
pnpm install
```

### 3. Development (Web)

Run the web version with Hot Module Replacement (HMR):

```bash
pnpm --filter web dev
```

### 4. Development (Mobile)

To run on a physical device or simulator, you must first generate the static web assets and sync them to the native projects.
iOS (MacOS + Xcode required)

```bash
# 1. Build the web files
pnpm --filter mobile generate
# 2. Sync assets to the native Xcode project
cd packages/mobile && pnpm exec cap sync ios
# 3. Open in Xcode to run on device/simulator
pnpm exec cap open ios
```

Android (Android Studio required)

```bash
# 1. Build the web files
pnpm --filter mobile generate
# 2. Sync assets to the native Android project
cd packages/mobile && pnpm exec cap sync android
# 3. Open in Android Studio
pnpm exec cap open android
```

some points about task

it was interesting to work with, i went trough 3 packages architecture inside monorepo, I put them under packages and configured so that both mobile and web use ui through extending the module, using everything from there even pages, and in web and mobile did appropriate configurations for working ssr on web and it off on mobile

If you have any questions feel free to contact
