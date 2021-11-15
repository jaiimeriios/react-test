function Footer() {
    return (
        <footer>
            <p className="m-0">
                ⌚ {new Date().toLocaleTimeString()}
                {' '} : {' '}
                {new Date().toDateString()}
            </p>
        </footer>
    );
}

export default Footer;
