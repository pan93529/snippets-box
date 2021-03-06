import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import 'promise-polyfill';
import 'whatwg-fetch';
import stores from './stores';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/global';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

useStrict(true);

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={stores}>
        <ThemeProvider theme={theme}>
          <LocaleProvider locale={enUS}>
            <Component />
          </LocaleProvider>
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}
