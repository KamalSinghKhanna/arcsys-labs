import Head from "next/head";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import ChatsPage from "./component/ChatsPage";
import { useState } from "react";
export default function Home() {
  const dummyUsers = [
    {
      id: 1,
      name: "Caressa Jessalin",
      description: "Lorem ipsum dolor sit am...",
    },
    { id: 2, name: "Letty Bride", description: "Lorem ipsum dolor sit am..." },
    { id: 3, name: "Kylie Rocket", description: "Lorem ipsum dolor sit am..." },
  ];

  const dummyChats = {
    1: Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      text: `Hello from User 1! This is message ${index + 1}.`,
      sender: index % 2 === 0 ? "User 1" : "You",
    })),
    2: Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      text: `Hey there! Message ${index + 1} from User 2.`,
      sender: index % 2 === 0 ? "User 2" : "You",
    })),
    3: Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      text: `Hola! This is message ${index + 1} from User 3.`,
      sender: index % 2 === 0 ? "User 3" : "You",
    })),
  };
  const [selectedUser, setSelectedUser] = useState(dummyUsers[0]);
  const [isChatPageVisible, setIsChatPageVisible] = useState(false);
  const handleUserSelect = (user) => {
    setIsChatPageVisible(true);
  };
  const handleBackButtonClick = () => {
    setIsChatPageVisible(false);
  };
  return (
    <>
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className="bg-[#050505] h-full sm:h-full flex flex-col gap-8 sm:gap-16 px-2 sm:px-10 md:px-16 py-8">
        <Navbar />
        <div className="flex flex-col md:flex-row gap-8  h-[80vh]">
          <Sidebar
            users={dummyUsers}
            onUserSelect={handleUserSelect}
            isChatPageVisible={isChatPageVisible}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />

          <ChatsPage
            selectedUser={selectedUser}
            onUserSelect={handleUserSelect}
            chats={dummyChats[selectedUser?.id]}
            isChatPageVisible={isChatPageVisible}
            onBackButtonClick={handleBackButtonClick}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
