import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

const PageLayout = ({ children }) => {
  return (
    <div className="max-w-lg mx-auto">
      <main>
        <section className="min-h-svh bg-customer-background">
          {children}
        </section>
      </main>
    </div>
  );
};

const Header = ({ children, title }) => {
  const navigate = useNavigate();

  if (children) {
    return children;
  }

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <header className="flex p-4 shadow-md">
      <button onClick={handleClick}>
        <MoveLeft className="size-7.5" strokeWidth={2.3} />
      </button>
      <h1 className="flex-1 text-lg font-semibold text-center text-text">
        {title}
      </h1>
    </header>
  );
};

const Container = ({ children }) => {
  return (
    <div className="p-4 border border-x border-neutral-100">{children}</div>
  );
};

PageLayout.Container = Container;
PageLayout.Header = Header;

export default PageLayout;
