"use client";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import CommonLayoutHeader from "./_components/CommonLayoutHeader";

interface ICommonLayoutProps {
  children: React.ReactNode;
  headerTitle: string;
  headerDescription: string;
}

const CommonLayout: React.FC<ICommonLayoutProps> = ({
  children,
  headerTitle,
  headerDescription,
}) => {
  return (
    <div className="relative">
      <CommonLayoutHeader
        headerTitle={headerTitle}
        headerDescription={headerDescription}
      />
      {children}
      <FloatingButton />
    </div>
  );
};

export default CommonLayout;
