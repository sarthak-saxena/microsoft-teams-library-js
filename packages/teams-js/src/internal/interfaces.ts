/**
 * @hidden
 * Hide from docs
 * Shim in definitions used for browser-compat
 *
 * @internal
 * Limited to Microsoft-internal use
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DOMMessageEvent {
  origin?: any;
  source?: any;
  data?: any;
  // Needed for Chrome1964
  originalEvent: DOMMessageEvent;
}

/**
 * @hidden
 * Hide from docs
 *
 * @internal
 * Limited to Microsoft-internal use
 */
export interface TeamsNativeClient {
  framelessPostMessage(msg: string): void;
}

/**
 * @hidden
 * Hide from docs
 *
 * @internal
 * Limited to Microsoft-internal use
 */
export interface ExtendedWindow extends Window {
  nativeInterface: TeamsNativeClient;
  onNativeMessage(evt: DOMMessageEvent): void;
}

/**
 * @hidden
 * Marty, add comments here
 */
export interface NestedAppAuthBridge {
  addEventListener: (eventName: string, callback: (response: string) => void) => void;
  postMessage: (message: string) => void;
  removeEventListener: (eventName: string, callback: (response: string) => void) => void;
}

/**
 * @hidden
 * Marty, add comments here
 */
export interface NestedAuthExtendedWindow extends Window {
  nestedAppAuthBridge: NestedAppAuthBridge;
}

/**
 * @internal
 * Limited to Microsoft-internal use
 */
export interface MessageRequest {
  id?: number;
  func: string;
  timestamp?: number;
  args?: any[];
}

/**
 * @hidden
 * Marty, add comments here
 */
export interface NestedAuthRequest extends MessageRequest {
  func: 'nestedAppAuthRequest';
  data?: string;
}

/**
 * @internal
 * Limited to Microsoft-internal use
 */
export interface MessageResponse {
  id: number;
  args?: any[];
  isPartialResponse?: boolean; // If the message is partial, then there will be more future responses for the given message ID.
}

/**
 * @hidden
 * Meant for Message objects that are sent to children without id
 *
 * @internal
 * Limited to Microsoft-internal use
 */
export interface DOMMessageEvent {
  func: string;
  args?: any[];
}
