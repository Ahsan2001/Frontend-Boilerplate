import { Navbar, Footer } from "../components";

interface LayoutProps {
    children: React.ReactNode;
    pageTitle?: string;
}


const Layout: React.FC<LayoutProps> = (props) => {

    const { children, pageTitle } = props;

    if (pageTitle) {
        document.title = pageTitle; 
    } else{
        document.title = "nahi hai title"; 
    }

    return (
        <>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </>
    )

}

export default Layout;