'use client';

import Image from "next/image";
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  
  const [openFaq, setOpenFaq] = useState(0);

  const languages = {
    en: { code: 'en', flag: '🇺🇸', name: 'English' },
    es: { code: 'es', flag: '🇪🇸', name: 'Español' },
    de: { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    fr: { code: 'fr', flag: '🇫🇷', name: 'Français' },
    pt: { code: 'pt', flag: '🇵🇹', name: 'Português' },
    it: { code: 'it', flag: '🇮🇹', name: 'Italiano' }
  };

  const changeLanguage = (newLocale) => {
    router.push(`/${newLocale}`);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const features = [
    { key: 'upload', icon: '📸' },
    { key: 'flashcards', icon: '🎯' },
    { key: 'login', icon: '🔐' },
    { key: 'account', icon: '👤' },
    { key: 'mcq', icon: '❓' },
    { key: 'summaries', icon: '📋' }
  ];

  const testimonials = ['sarah', 'mike', 'emma'];
  const faqItems = ['what', 'how', 'pricing', 'devices', 'accuracy', 'formats'];

  return (
    <div>
      {/* Language Selector */}
      <div className="language-selector">
        <select 
          value={locale}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {Object.entries(languages).map(([code, lang]) => (
            <option key={code} value={code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>

      {/* iOS App Logo in Corner */}
      <div className="corner-logo">
        <Image src="/logo.png" alt="StudyOS Logo" width={60} height={60} />
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="floating-elements">
          <div className="floating-icon">📚</div>
          <div className="floating-icon">🎓</div>
          <div className="floating-icon">💡</div>
          <div className="floating-icon">⚡</div>
        </div>
        <div className="container">
          <div className="logo-container">
            <div className="logo-placeholder">
              <Image src="/logo.png" alt="StudyOS Logo" width={140} height={140} />
            </div>
          </div>
          
          <h1>{t('header.title')}</h1>
          <p className="subtitle">{t('header.subtitle')}</p>
          <p className="description">{t('header.description')}</p>
          
          <div className="download-buttons">
            <a href="https://apps.apple.com/es/app/studyos/id6747879382" className="app-store-btn">
              <Image 
                src={`/${locale}.svg`} 
                alt={t('common.downloadAppStore')} 
                width={200} 
                height={60}
                className="app-store-logo" 
              />
            </a>
          </div>
          
          {/* Rating integrated in header */}
          <div className="header-rating">
            <div className="rating-content">
              <div className="rating-avatars">
                <Image src="/user1.webp" alt="User 1" width={32} height={32} className="avatar" />
                <Image src="/user2.webp" alt="User 2" width={32} height={32} className="avatar" />
                <Image src="/user3.webp" alt="User 3" width={32} height={32} className="avatar" />
                <Image src="/user4.webp" alt="User 4" width={32} height={32} className="avatar" />
              </div>
              <div className="rating-text">
                <span className="rating-loved">{t('rating.lovedBy')}</span> <span className="rating-million">{t('rating.millionStudents')}</span>
              </div>
            </div>
            <div className="rating-score">
              <span className="rating-laurel">🏆</span>
              <span className="rating-value">4.9</span>
              <span className="rating-stars">★★★★★</span>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>{t('features.title')}</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.key} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>
                  {t(`features.items.${feature.key}.title`)}
                  {t.has(`features.items.${feature.key}.comingSoon`) && (
                    <span style={{color: '#10b981', fontSize: '0.8em', fontWeight: '600'}}>
                      {' '}{t(`features.items.${feature.key}.comingSoon`)}
                    </span>
                  )}
                </h3>
                <p>{t(`features.items.${feature.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>{t('testimonials.title')}</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial} className="testimonial">
                <p className="testimonial-text">{t(`testimonials.items.${testimonial}.text`)}</p>
                <p className="testimonial-author">{t(`testimonials.items.${testimonial}.author`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.description')}</p>
          <div className="download-buttons">
            <a href="https://apps.apple.com/es/app/studyos/id6747879382" className="app-store-btn">
              <Image 
                src={`/${locale}.svg`} 
                alt={t('common.downloadAppStore')} 
                width={200} 
                height={60}
                className="app-store-logo" 
              />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>{t('faq.title')}</h2>
          <p className="faq-subtitle">{t('faq.subtitle')}</p>
          <div className="faq-container">
            {faqItems.map((faq, index) => (
              <div key={faq} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{t(`faq.items.${faq}.question`)}</span>
                  <i className="faq-icon">{openFaq === index ? '−' : '+'}</i>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-content">
                    {t(`faq.items.${faq}.answer`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href={`/${locale}`}>{t('footer.links.home')}</a>
            <a href={`/${locale}/privacy`}>{t('footer.links.privacy')}</a>
            <a href={`/${locale}/terms`}>{t('footer.links.terms')}</a>
          </div>
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
} 