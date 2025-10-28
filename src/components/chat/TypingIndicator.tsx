

export const TypingIndicator = () => {
  return (
    <div className="flex justify-start w-full animate-fade-in">
      <div className="bg-card text-card-foreground border border-border rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce typing-dot delay-0" />
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce typing-dot delay-150" />
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce typing-dot delay-300" />
        </div>
      </div>
    </div>
  );
};
