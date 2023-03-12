import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootSiblingParent } from 'react-native-root-siblings';

import { Routes } from './src/routes';

const theme = createTheme({
  components: {
    Button: {
      buttonStyle: {
        borderRadius: 10,
        backgroundColor: '#3C479C',
        paddingVertical: 10,
        marginTop: 10,
      },
    },
    Input: {
      containerStyle: { paddingLeft: 0, paddingRight: 0 },
      labelStyle: { fontWeight: '600', marginBottom: 8, fontSize: 13 },
      inputContainerStyle: {
        borderBottomWidth: 0,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        paddingLeft: 14,
        height: 45,
      },
    },
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <RootSiblingParent>
            <Routes />
          </RootSiblingParent>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
