import React, { ComponentType } from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location }, // para manter o histório
            }}
          />
        );
      }}
    />
  );
};

export default Route;
