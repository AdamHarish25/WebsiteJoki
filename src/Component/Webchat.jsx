import { useState } from 'react';

import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
} from '@botpress/webchat';
import { Link } from 'react-router';

const clientId = "8f6a0bab-b322-4611-ad0a-b169e4b2b61e";

const configuration = {
  color: '#000',
};

export default function WebCHAT() {
  const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div className={`relative ${isWebchatOpen ? "" : "grid place-items-end"} space-y-5`}>
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} className='w-fit h-fit p-5 fixed bottom-5 right-5'></Fab>
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
