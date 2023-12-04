This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install Node dependency:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


# Chat App Documentation

This README file provides an overview of the structure and flow of the Chat App built with Next.js. The application consists of several components, including `index.js`, `Navbar`, `Sidebar`, `ChatsPage`, `UserChat`, `Messages`, and `Footer`.

## 1. `index.js`

The `index.js` file serves as the entry point for the application. It imports various components and sets up the main structure of the chat app. Here's a brief overview of its functionality:

- **State Management:**
  - `useState` from React is used to manage the state of the selected user and the visibility of the chat page.

- **Dummy Data:**
  - `dummyUsers`: An array containing dummy user data.
  - `dummyChats`: An object mapping user IDs to arrays of dummy chat messages.

- **Event Handling:**
  - `handleUserSelect`: sets the chat page to be visible.
  - `handleBackButtonClick`: Hides the chat page.

- **Components:**
  - `Navbar`: Represents the application's navigation bar.
  - `Sidebar`: Displays a list of users and handles user selection.
  - `ChatsPage`: Displays the selected user's chat messages and handles navigation.

- **HTML Structure:**
  - The HTML structure is divided into different sections, including the `Head` for metadata, the main content area with `Navbar`, `Sidebar`, and `ChatsPage`, and a `Footer`.

## 2. `Sidebar.js`

The `Sidebar.js` component is responsible for rendering the sidebar containing a list of users. Here's an overview:

- **Props:**
  - `users`: An array of user data.
  - `onUserSelect`: Callback function for handling user selection.
  - `isChatPageVisible`: Indicates whether the chat page is visible.
  - `selectedUser`: The currently selected user.
  - `setSelectedUser`: Function to update the selected user.

- **Event Handling:**
  - `handleUserSelect`: Calls the parent's `onUserSelect` and sets the chat page to be visible.

- **HTML Structure:**
  - The component renders a list of users (`UserChat` components) and includes additional UI elements for chat-related actions.

## 3. `UserChat.js`

The `UserChat.js` component represents an individual user in the sidebar. Here's an overview:

- **Props:**
  - `user`: User data.
  - `onSelect`: Callback function for handling user selection.
  - `isSelected`: Indicates whether the user is currently selected.

- **Event Handling:**
  - `handleDivClick`: Calls the parent's `onSelect` when the user is clicked.

- **HTML Structure:**
  - Displays user information and changes the background color when selected.

## 4. `ChatsPage.js`

The `ChatsPage.js` component renders the chat page for the selected user. Here's an overview:

- **Props:**
  - `selectedUser`: The currently selected user.
  - `chats`: An array of chat messages.
  - `isChatPageVisible`: Indicates whether the chat page is visible.
  - `onBackButtonClick`: Callback function for handling back button click.

- **Event Handling:**
  - `handleBackButtonClick`: Calls the parent's `onBackButtonClick` when the back button is clicked.

- **HTML Structure:**
  - Renders the chat messages and provides a text input for sending new messages. Includes a mobile version for small screens.

## 5. `Messages.js`

The `Messages.js` component renders individual chat messages. Here's an overview:

- **Props:**
  - `message`: The text of the message.

- **HTML Structure:**
  - Displays chat messages, alternating between the user and the application, with different styling for each.

## 6. Conclusion

This documentation provides a high-level overview of the structure and functionality of the Chat App built with Next.js. For more detailed information, refer to the code comments and the individual component files.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


