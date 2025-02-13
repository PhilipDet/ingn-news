import { FooterStyled } from "./footer.styled";

export const Footer = () => {
    return (
        <FooterStyled>
            <ul className="footer-container">
                <li className="footer-links">
                    <ul>
                        <li>Adresse:</li>
                        <li>Intet nyt - Godt nyt ApS</li>
                        <li>Tulipanvej 232</li>
                        <li>7320</li>
                        <li>Valby Øster</li>
                    </ul>
                </li>
                <li className="footer-links">
                    <ul>
                        <li>Links</li>
                        <li>
                            <a href="#">vikanweb.dk</a>
                        </li>
                        <li>
                            <a href="#">overpådenandenside.dk</a>
                        </li>
                        <li>
                            <a href="#">retsinformation.dk</a>
                        </li>
                        <li>
                            <a href="#">nogetmednews.dk</a>
                        </li>
                    </ul>
                </li>
                <li className="footer-links">
                    <ul>
                        <li>Politik</li>
                        <li>
                            <a href="#">Privatlivspolitik</a>
                        </li>
                        <li>
                            <a href="#">Cookiepolitik</a>
                        </li>
                        <li>
                            <a href="#">Købsinformation</a>
                        </li>
                        <li>
                            <a href="#">Delingspolitik</a>
                        </li>
                    </ul>
                </li>
                <li className="footer-links">
                    <ul>
                        <li>Kontakt</li>
                        <li>
                            <a href="#">ingn@nyhed.dk</a>
                        </li>
                        <li>
                            <a href="#">teletfon: 23232323</a>
                        </li>
                        <li>
                            fax: 123123-333
                        </li>
                    </ul>
                </li>
            </ul>
        </FooterStyled>
    );
};
