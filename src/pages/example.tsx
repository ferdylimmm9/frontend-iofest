// import * as React from 'react';
// import dynamic from 'next/dynamic';

// const ChatEngine = dynamic(() =>
//   import('react-chat-engine').then((module) => module.ChatEngine),
// );
// const MessageFormSocial = dynamic(() =>
//   import('react-chat-engine').then((module) => module.MessageFormSocial),
// );

// export default function ExamplePages() {
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

// export default function Example() {
//   return (
//     <Carousel slideSize="20%" slideGap="xl" withControls={false} mx="auto" loop>
//       <Carousel.Slide>
//         <SliderComponent />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <SliderComponent />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <SliderComponent />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <SliderComponent />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <SliderComponent />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <SliderComponent />
//       </Carousel.Slide>
//     </Carousel>
//   );
// }

import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import SliderComponent from 'modules/about/components/card';
import { useRef } from 'react';

export default function Example() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      mx="auto"
      withControls={false}
      height={rem(440)}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideSize="20%"
      slideGap="xl"
      align="start"
      slidesToScroll={3}
      loop
      dragFree
    >
      <Carousel.Slide>
        <SliderComponent />
      </Carousel.Slide>
      <Carousel.Slide>
        <SliderComponent />
      </Carousel.Slide>
      <Carousel.Slide>
        <SliderComponent />
      </Carousel.Slide>
      <Carousel.Slide>
        <SliderComponent />
      </Carousel.Slide>
      <Carousel.Slide>
        <SliderComponent />
      </Carousel.Slide>
    </Carousel>
  );
}
