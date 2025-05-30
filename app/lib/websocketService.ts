import { Client, IFrame, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { getApiDomain } from "@/utils/domain";

type WebSocketMessage = {
  deletedId?: string;
  ideaId?: string;
  [key: string]: unknown;
};

let stompClient: Client | null = null;

export const connectWebSocket = (
  userId: string,
  projectId: string,
  onIdeaMessage: (message: WebSocketMessage) => void,
  onChangeMessage: (message: WebSocketMessage) => void,
  onUserMessage: (message: WebSocketMessage) => void
): Client => {
  if (stompClient) {
    disconnectWebSocket();
  }
  const apiDomain = getApiDomain().endsWith('/') 
    ? getApiDomain().slice(0, -1) 
    : getApiDomain();
  const socket = new SockJS(`${apiDomain}/ws`);
  const token = sessionStorage.getItem('token') || '';

  stompClient = new Client({
    webSocketFactory: () => socket,
    connectHeaders: {
      Authorization: token,
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  stompClient.onConnect = () => {
    console.log('Connected to WebSocket');
    
    // Subscribe to ideas channel
    stompClient?.subscribe(`/topic/projects/${projectId}/ideas`, (message: IMessage) => {
      try {
        const parsed = JSON.parse(message.body) as WebSocketMessage;
        onIdeaMessage(parsed);
      } catch (error) {
        console.error('Error parsing idea notification:', error);
      }
    });

    // Subscribe to project changes channel
    stompClient?.subscribe(`/topic/projects/${projectId}/changes`, (message: IMessage) => {
      try {
        const parsed = JSON.parse(message.body) as WebSocketMessage;
        onChangeMessage(parsed);
      } catch (error) {
        console.error('Error parsing change notification:', error);
      }
    });

    // Subscribe to user-specific channel
    stompClient?.subscribe(`/queue/user-${userId}-notifications`, (message) => {
      try {
        const parsed = JSON.parse(message.body) as WebSocketMessage;
        onUserMessage(parsed);
      } catch (error) {
        console.error('Error parsing user message:', error);
      }
    });
  };

  stompClient.onStompError = (frame: IFrame) => {
    console.error('STOMP error:', frame.headers.message);
  };

  stompClient.activate();
  return stompClient;
};

export const disconnectWebSocket = (): void => {
  if (stompClient) {
    stompClient.deactivate().then(() => {
      console.log('WebSocket disconnected');
      stompClient = null;
    });
  }
};