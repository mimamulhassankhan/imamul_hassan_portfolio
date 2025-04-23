declare module 'react-rotating-text' {
    interface ReactRotatingTextProps {
        items: string[];
        color?: string;
        emptyPause?: number;
        typingInterval?: number;
        deletingInterval?: number;
        pause?: number;
    }

    const ReactRotatingText: React.FC<ReactRotatingTextProps>;
    export default ReactRotatingText;
} 