import React from 'react';
import AppContainer from './AppContainer.jsx';

const App = () => {
  const styles = {
    container: {
      backgroundColor: '#8FD694',
      height: 800,
    },
  };

  return (
    <div style={styles.container}>
      <AppContainer />
    </div>
  );
};

export default App;
