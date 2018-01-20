import thunk from 'redux-thunk';

const configureMiddlewares = () => {
  const middlewares = [];

  middlewares.push(thunk);

  return middlewares;
}

export default configureMiddlewares;
