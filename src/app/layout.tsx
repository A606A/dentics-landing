import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body className="font-inter text-primary">{children}</body>
	</html>
);

export default RootLayout;
