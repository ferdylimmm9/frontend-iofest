// import dynamic from 'next/dynamic';
// import * as React from 'react';

// const ChatEngine = dynamic(() =>
//   import('react-chat-engine').then((module) => module.ChatEngine),
// );
// const MessageFormSocial = dynamic(() =>
//   import('react-chat-engine').then((module) => module.MessageFormSocial),
// );

// export default function ExamplePage() {
//   const [isInitiate, setIsInitiate] = React.useState(false);

//   React.useEffect(() => {
//     if (typeof document !== null) {
//       setIsInitiate(true);
//     }
//   }, []);

//   if (!isInitiate) {
//     return <></>;
//   }
//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="f8eed168-aa1a-43ef-b7e8-d7b4115452de"
//       userName="ferdylimmm9"
//       userSecret="ooredo123"
//       renderNewMessageForm={() => <MessageFormSocial />}
//     />
//   );
// }

export default function ExamplePage() {
  return <></>;
}
