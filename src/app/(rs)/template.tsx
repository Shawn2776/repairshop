const Template = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="animate-appear">
      {/* HEADER */}
      {children}
    </div>
  );
};

export default Template;
