// Global type definitions for analytics and other external libraries

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  const tomorrow: any;
  export { tomorrow };
}

declare global {
    interface Window {
        // Google Analytics
        gtag?: (
            command: 'config' | 'event' | 'set',
            targetId: string,
            config?: {
                page_title?: string;
                page_location?: string;
                event_category?: string;
                event_label?: string;
                method?: string;
                content_type?: string;
                item_id?: string;
            }
        ) => void;

        // Facebook Pixel
        fbq?: (
            command: 'track' | 'init',
            eventName?: string,
            parameters?: Record<string, any>
        ) => void;

        // Hotjar
        hj?: (
            command: 'stateChange',
            url?: string
        ) => void;

        // Add other analytics libraries as needed
        dataLayer?: any[];
    }
}

export { }; 