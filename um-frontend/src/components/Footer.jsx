const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 py-4 mt-auto">
            <div className="container mx-auto text-center text-sm">
                &copy; {new Date().getFullYear()} UM
            </div>
        </footer>
    );
};
export default Footer;