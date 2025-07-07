"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const t = useTranslations("terms");
  const locale = useLocale();
  const router = useRouter();

  const languages = {
    en: { code: 'en', flag: '🇺🇸', name: 'English' },
    es: { code: 'es', flag: '🇪🇸', name: 'Español' },
    de: { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    fr: { code: 'fr', flag: '🇫🇷', name: 'Français' },
    pt: { code: 'pt', flag: '🇵🇹', name: 'Português' }
  };

  const changeLanguage = (newLocale) => {
    router.push(`/${newLocale}/terms`);
  };

  return (
    <div className="min-h-screen bg-[var(--background-primary)]">
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

          {/* Sections: Render in the order and structure of en.json */}

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.introduction.title")}</h2>
            <div className="text-base leading-7" dangerouslySetInnerHTML={{ __html: t("sections.introduction.content") }} />
          </section>
          <hr className="my-12 border-gray-200" />

          {/* Acceptance */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.acceptance.title")}</h2>
            <div className="text-base leading-7">{t("sections.acceptance.content")}</div>
          </section>
          <hr className="my-12 border-gray-200" />


          {/* Services */}
          {t("sections.services.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.services.title")}</h2>
              <div className="text-base leading-7">{t("sections.services.content")}</div>
            </section>
          )}
          {t("sections.services.title") && <hr className="my-12 border-gray-200" />}

          {/* Subscriptions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.subscriptions.title")}</h2>
            <div className="text-base leading-7">{t("sections.subscriptions.content")}</div>
            {t("sections.subscriptions.billing.title") && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{t("sections.subscriptions.billing.title")}</h3>
                <div className="text-base leading-7">{t("sections.subscriptions.billing.content")}</div>
              </div>
            )}
            {t("sections.subscriptions.cancellation.title") && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{t("sections.subscriptions.cancellation.title")}</h3>
                <div className="text-base leading-7">{t("sections.subscriptions.cancellation.content")}</div>
              </div>
            )}
          </section>
          <hr className="my-12 border-gray-200" />

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.intellectualProperty.title")}</h2>
            <div className="text-base leading-7">{t("sections.intellectualProperty.content")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          {/* Third-Party Rights Compliance */}
          {t("sections.thirdPartyRights.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.thirdPartyRights.title")}</h2>
              <div className="text-base leading-7">{t("sections.thirdPartyRights.content")}</div>
            </section>
          )}
          {t("sections.thirdPartyRights.title") && <hr className="my-12 border-gray-200" />}

          {/* Third-Party Content */}
          {t("sections.thirdPartyContent.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.thirdPartyContent.title")}</h2>
              <div className="text-base leading-7">{t("sections.thirdPartyContent.content")}</div>
            </section>
          )}
          {t("sections.thirdPartyContent.title") && <hr className="my-12 border-gray-200" />}

          {/* Conduct Rules and Acceptable Use */}
          {t("sections.conductRules.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.conductRules.title")}</h2>
              <div className="text-base leading-7">{t("sections.conductRules.content")}</div>
              {Array.isArray(t.raw("sections.conductRules.items")) && (
                <ul className="list-disc pl-6 space-y-4 mt-4">
                  {t.raw("sections.conductRules.items").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          )}
          {t("sections.conductRules.title") && <hr className="my-12 border-gray-200" />}

          {/* Customer Data */}
          {t("sections.customerData.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.customerData.title")}</h2>
              <div className="text-base leading-7">{t("sections.customerData.content")}</div>
            </section>
          )}
          {t("sections.customerData.title") && <hr className="my-12 border-gray-200" />}

          {/* Recordings and Consent */}
          {t("sections.recordings.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.recordings.title")}</h2>
              <div className="text-base leading-7">{t("sections.recordings.content")}</div>
            </section>
          )}
          {t("sections.recordings.title") && <hr className="my-12 border-gray-200" />}

          {/* Payments */}
          {t("sections.payments.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.payments.title")}</h2>
              <div className="text-base leading-7">{t("sections.payments.content")}</div>
            </section>
          )}
          {t("sections.payments.title") && <hr className="my-12 border-gray-200" />}

          {/* Refund Policy */}
          {t("sections.refundPolicy.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.refundPolicy.title")}</h2>
              <div className="text-base leading-7">{t("sections.refundPolicy.content")}</div>
            </section>
          )}
          {t("sections.refundPolicy.title") && <hr className="my-12 border-gray-200" />}

          {/* Account Registration */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.accountRegistration.title")}</h2>
            <div className="text-base leading-7">{t("sections.accountRegistration.content")}</div>
            
          </section>
          <hr className="my-12 border-gray-200" />

          {/* Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.termination.title")}</h2>
            <div className="text-base leading-7">{t("sections.termination.content")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.limitation.title")}</h2>
            <div className="text-base leading-7">{t("sections.limitation.content")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          {/* Indemnification */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.indemnification.title")}</h2>
            <div className="text-base leading-7">{t("sections.indemnification.content")}</div>
          </section>
          <hr className="my-12 border-gray-200" />

          {/* International Use */}
          {t("sections.internationalUse.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.internationalUse.title")}</h2>
              <div className="text-base leading-7">{t("sections.internationalUse.content")}</div>
            </section>
          )}
          {t("sections.internationalUse.title") && <hr className="my-12 border-gray-200" />}

          {/* Force Majeure */}
          {t("sections.forceMajeure.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.forceMajeure.title")}</h2>
              <div className="text-base leading-7">{t("sections.forceMajeure.content")}</div>
            </section>
          )}
          {t("sections.forceMajeure.title") && <hr className="my-12 border-gray-200" />}

          {/* Service Modifications */}
          {t("sections.serviceModifications.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.serviceModifications.title")}</h2>
              <div className="text-base leading-7">{t("sections.serviceModifications.content")}</div>
            </section>
          )}
          {t("sections.serviceModifications.title") && <hr className="my-12 border-gray-200" />}

          {/* Apple-Specific Terms */}
          {t("sections.appleTerms.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.appleTerms.title")}</h2>
              <div className="text-base leading-7">{t("sections.appleTerms.content")}</div>
            </section>
          )}
          {t("sections.appleTerms.title") && <hr className="my-12 border-gray-200" />}

          {/* Governing Law */}
          {t("sections.governingLaw.title") && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.governingLaw.title")}</h2>
              <div className="text-base leading-7">{t("sections.governingLaw.content")}</div>
            </section>
          )}
          {t("sections.governingLaw.title") && <hr className="my-12 border-gray-200" />}

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">{t("sections.contact.title")}</h2>
            <div className="text-base leading-7">{t("sections.contact.content")}</div>
            <div className="mt-4">
              <span className="font-medium">Email:</span>{" "}
              <a href={`mailto:${t("sections.contact.email")}`} className="text-[var(--primary)] hover:underline font-semibold">
                {t("sections.contact.email")}
              </a>
              {t("sections.contact.supportEmail") && (
                <><br /><span className="font-medium">Support:</span>{" "}
                <a href={`mailto:${t("sections.contact.supportEmail")}`} className="text-[var(--primary)] hover:underline font-semibold">
                  {t("sections.contact.supportEmail")}
                </a></>
              )}
            </div>
          </section>
          <hr className="my-12 border-gray-200" />

          {/* Footer/Conclusion */}
          <div className="pt-6 text-center text-[var(--text-secondary)]">
            <p>{t("sections.conclusion")}</p>
          </div>
        </div>
      </main>
    </div>
  );
} 