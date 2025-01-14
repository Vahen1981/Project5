import React from 'react';
import { Typography, Container } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Typography variant="h4" color="error">
            Algo salió mal... por favor intenta de nuevo más tarde
          </Typography>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
