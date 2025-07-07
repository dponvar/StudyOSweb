"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivacyPage() {
  const t = useTranslations("privacy");
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("legal-bg");
    return () => document.body.classList.remove("legal-bg");
  }, []);

  const languages = {
    en: { code: 'en', flag: '🇺🇸', name: 'English' },
    es: { code: 'es', flag: '🇪🇸', name: 'Español' },
    de: { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    fr: { code: 'fr', flag: '🇫🇷', name: 'Français' },
    pt: { code: 'pt', flag: '🇵🇹', name: 'Português' }
  };

  const changeLanguage = (newLocale) => {
    router.push(`/${newLocale}/privacy`);
  };

  function highlightIntro(html) {
    return html.replace(/(AI|privacidad|privacy|encrypted|seguridad|security|datos|data)/gi, '<span class="highlight">$1</span>');
  }

  return (
    <div className="min-h-screen">
      {/* Language Selector */}
      <div className="language-selector">
        <select value={locale} onChange={e => changeLanguage(e.target.value)}>
          {Object.entries(languages).map(([code, lang]) => (
            <option key={code} value={code}>{lang.flag} {lang.name}</option>
          ))}
        </select>
      </div>

      {/* Improved Back Button */}
      <div className="back-btn-container">
        <Link href={`/${locale}`} className="back-btn" aria-label={t("header.backText") + ' StudyOS'}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>{t("header.backText")}</span>
        </Link>
      </div>

      {/* Simple Header Section */}
      <header className="w-full py-12 bg-[var(--background-secondary)] text-center border-b border-[var(--divider)]">
        <div className="container max-w-2xl mx-auto px-4">
          <h1 className="main-title text-4xl md:text-5xl font-extrabold mb-2 text-[var(--text-primary)] bg-none bg-clip-border text-transparent-none" style={{WebkitTextFillColor: 'unset'}}>
            {t("header.title")}
          </h1>
          <p className="main-subtitle text-lg md:text-xl text-[var(--text-secondary)] mb-2">{t("header.subtitle")}</p>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="flex justify-center py-10 bg-[var(--background-primary)] min-h-screen">
        <div className="privacy-card w-full max-w-2xl">
          <div className="last-updated mb-8">
            <span className="font-medium">{t("lastUpdated.effectiveLabel", { defaultValue: "Effective:" })}</span> {t("lastUpdated.effective")}<br />
            <span className="font-medium">{t("lastUpdated.updatedLabel", { defaultValue: "Last updated:" })}</span> {t("lastUpdated.updated")}
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.introduction.title")}</h2>
            <div className="text-base leading-7" dangerouslySetInnerHTML={{ __html: highlightIntro(t("sections.introduction.content")) }} />
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.whoWeAre.title")}</h2>
            <div className="text-base leading-7">{t("sections.whoWeAre.content")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.informationWeCollect.title")}</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t("sections.informationWeCollect.studyMaterials.title")}</h3>
              <ul className="list-disc pl-6 space-y-4">
                {t.raw("sections.informationWeCollect.studyMaterials.items").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t("sections.informationWeCollect.accountInfo.title")}</h3>
              <ul className="list-disc pl-6 space-y-4">
                {t.raw("sections.informationWeCollect.accountInfo.items").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t("sections.informationWeCollect.appFunctionality.title")}</h3>
              <ul className="list-disc pl-6 space-y-4">
                {t.raw("sections.informationWeCollect.appFunctionality.items").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.howWeUseInfo.title")}</h2>
            <ul className="list-disc pl-6 space-y-4">
              {t.raw("sections.howWeUseInfo.items").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.thirdPartyServices.title")}</h2>
            <div className="text-base leading-7">{t("sections.thirdPartyServices.content")}</div>
            <ul className="list-disc pl-6 space-y-4 my-4">
              {t.raw("sections.thirdPartyServices.items").map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <div className="text-base leading-7">{t("sections.thirdPartyServices.additionalContent")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.dataSecurity.title")}</h2>
            <div className="text-base leading-7">{t("sections.dataSecurity.content")}</div>
            <ul className="list-disc pl-6 space-y-4 mt-4">
              {t.raw("sections.dataSecurity.items").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.yourRights.title")}</h2>
            <ul className="list-disc pl-6 space-y-4">
              {t.raw("sections.yourRights.items").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.childrenPrivacy.title")}</h2>
            <div className="text-base leading-7">{t("sections.childrenPrivacy.content")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.changes.title")}</h2>
            <div className="text-base leading-7">{t("sections.changes.content")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.contact.title")}</h2>
            <div className="text-base leading-7">{t("sections.contact.content")}</div>
            <div className="mt-4">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href={`mailto:${t("sections.contact.email")}`} className="text-[var(--primary)] hover:underline font-semibold">
                  {t("sections.contact.email")}
                </a>
              </p>
              <p>
                <span className="font-medium">Support:</span>{" "}
                <a href={`mailto:${t("sections.contact.support")}`} className="text-[var(--primary)] hover:underline font-semibold">
                  {t("sections.contact.support")}
                </a>
              </p>
            </div>
            <div className="text-base leading-7 mt-4">{t("sections.contact.additionalInfo")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          <div className="pt-6 text-center text-[var(--text-secondary)]">
            <p>{t("sections.conclusion")}</p>
          </div>
        </div>
      </main>
    </div>
  );
} 