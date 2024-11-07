
import { useTranslation } from 'react-i18next'

const Header = () => {
    const [t, i18n] = useTranslation("global");

    const handleChangelanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

  return (
    <div>
        <h1>{t("header.message")}</h1>
        <button onClick={()=> handleChangelanguage("en")}>EN</button>
        <button onClick={()=> handleChangelanguage("es")}>ES</button>
    </div>
  );
};

export default Header;