type props = {
  children?: JSX.Element | JSX.Element[];
};

const CardMain = (props: props) => {
  return <section className="flex space-x-4">{props.children}</section>;
};

export default CardMain;
