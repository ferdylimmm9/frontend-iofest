import 'styles/globals.css';
import { MantineProvider, TypographyStylesProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'common/repositories/query-client';
import colors from 'common/styles/colors';
import yupEnValidation from 'locales/en/validation.yup';
import yupIdValidation from 'locales/id/validation.yup';
import merge from 'lodash/merge';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import appWithI18n from 'next-translate/appWithI18n';
import * as React from 'react';
import { setLocale } from 'yup';

import i18nConfig from '../../i18n';

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  React.useEffect(() => {
    if (locale === 'en') {
      setLocale(yupEnValidation as any);
    } else {
      setLocale(yupIdValidation as any);
    }
  }, [locale]);

  return (
    <>
      <style global jsx>
        {resetStyle}
      </style>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ fontFamily: 'Rubik' }}
      >
        <TypographyStylesProvider>
          <NotificationsProvider
            limit={10}
            position="top-right"
            zIndex={9999999}
            autoClose={4000}
          >
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </NotificationsProvider>
        </TypographyStylesProvider>
      </MantineProvider>
    </>
  );
}

export default appWithI18n(App as any, {
  ...i18nConfig,
  loadLocaleFrom: (locale, ns) => {
    const englishTexts = import(`../locales/en/${ns}.json`);
    let countrySpecific = Promise.resolve({});
    let languageOnly = Promise.resolve({});
    if (locale) {
      countrySpecific = import(
        `../locales/${locale.replace('-', '_')}/${ns}.json`
      ).catch(() => ({}));
      languageOnly = import(
        `../locales/${locale.substring(0, 2)}/${ns}.json`
      ).catch(() => ({}));
    }
    return Promise.all([englishTexts, countrySpecific, languageOnly]).then(
      ([en, country, language]) => merge({}, en, country, language),
    );
  },
});

const resetStyle = `
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
html {
  font-family: Inter, Segoe UI, 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  font-size: 16px;
  clear: both;
  box-shadow: none;
}
#__next > div:first-of-type {
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: darkgrey transparent;
}
*::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
*::-webkit-scrollbar-track {
  background: none;
  border-radius: 50%;
}
*::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 24px;
}

.no-scrollbar::-webkit-scrollbar{
  width: 0;
  height: 0;
}

*::before {
  box-sizing: border-box;
}
*::after {
  box-sizing: border-box;
}
ul[class] {
  margin: 0;
  list-style: none;
}
ol[class] {
  margin: 0;
  list-style: none;
}
body {
  max-width: 100vw;
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: initial;
  margin: 0;
}
body > div#__next {
  min-height: 100vh;
}
figure {
  margin: 0;
}
blockquote {
  margin: 0;
}
dl {
  margin: 0;
}
dd {
  margin: 0;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img {
  max-width: 100%;
  display: block;
}
input {
  font: inherit;
}
button {
  font: inherit;
}
textarea {
  font: inherit;
}
select {
  font: inherit;
}
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.RRT__showmore > div {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.RRT__showmore-label {
  padding: 0px 16px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  box-shadow: none !important;
}
.RRT__showmore{
  z-index:15;
}

.RRT__removable {
  position: unset !important;
}

.RRT__removable-text {
  font-size: 14px;
  margin-right: 4px !important;
}

.RRT__removable-icon {
  position: absolute;
  top: 8px !important;
  right: 8px !important;
  color: transparent;
  width: 16px;
  font-size: 19px !important;
  height: 16px;
  border-radius: 10px;
  background : transparent;
}

.RRT__tab--selected {
  border-top-left-radius : 8px;
  border-top-right-radius : 8px;
  background-color:${colors.bgMain} !important;
  border-left:none;
}

.RRT__tab {
  border-width : 0px;
  font-family: "DM Sans";
  border-left: 1px solid ${colors.borderMain};
}

.RRT__tab--first{
  border-left:none;
}

.RRT__tab:hover {
  border-top-left-radius : 8px;
  border-top-right-radius : 8px;
  background-color:${colors.bgMainHover};
  border-left:none;
}

.RRT__container{
}

.RRT__panel {
  border : none;
  padding : 0 !important;
}

.RRT__removable-icon::before {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px !important;
  content: "+";
  transform: rotate(45deg);
  position: absolute;
  color: black !important;
  top: 50%;
  left: 50%;
  right: 50%;
  bottom: 50%;
}

.ck-editor__editable {
  min-height: 300px;
}

.rdw-editor-main, .rdw-editor-toolbar {
  border: 1px solid #c4c4c4 !important;
  padding: 8px;
}

.rdw-editor-main {
  min-height: 300px;
}

.before-border::before{
  content : '';
  border-left: 0.5px solid white;
  // margin-left : 8px;

    
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition:  all 200ms ease-out;
}

.before-border-active::before{
  content : '';
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition:  all 200ms ease-out;
}

.table-component::-webkit-scrollbar-track {
  background-color: ${colors.dividerStrong};
  width: 4px;
  border-radius: 0px;
}

.table-component::-webkit-scrollbar {
  width: 4px;
}

.table-component::-webkit-scrollbar-thumb {
  background-color: ${colors.dividerStrong};
}

.side-navigation-container::-webkit-scrollbar-thumb{
  background-color : ${colors.dividerStrong};
}

.--aggregate {
  background-color: ${colors.productNormal};
  color: ${colors.white};
  border-top: none;
}

.tableexport-string:nth-child(4)>span{
  color:${colors.productNormal};
}

tr > .--green{
  color: #3AA76D;
}

tr > .--red{
  color: #D44333;
}
tr > .--background{
  background-color:${colors.backgroundReconComplete};
}

tr> .--number{
  font-family: 'DM Mono', monospace;
}

.mb16{
  margin-bottom: 16px;
}
`;
