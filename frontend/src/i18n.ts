import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(HttpApi) // Tải các bản dịch json
    .use(LanguageDetector) // Tìm và phát hiện ngôn ngữ đang sử dụng của hệ thống
    .use(initReactI18next) // Kết nối tới React
    .init({
        supportedLngs: ["vi", "en", "jp"],
        fallbackLng: "vi", // Ngôn ngữ mặc định nếu không phát hiện ra ngôn ngữ hệ thống nào
        debug: false,
        backend: {
            loadPath: "/i18n/{{lng}}.json", // path tới JSON
        },
        react: {
            useSuspense: true, // bật suspense để lazy load
        },
    });
export default i18n;
