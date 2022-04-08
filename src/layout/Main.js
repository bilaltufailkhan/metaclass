const Main = (props) => {
  return <div data-theme={props.theme}>{props.children}</div>;
};

export default Main;
