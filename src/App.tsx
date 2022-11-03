import { MantineProvider, Button } from '@mantine/core';

function App() {
  return <Button>My app button</Button>;
}

// Custom theme is applied to all components in App
function Demo() {
  return (
    <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  );
}