type props = {
  children?: JSX.Element | JSX.Element[];
};

const CardMain = (props: props) => {
  return (
    <section className="sm:flex sm:space-x-4 lg:w-[80%] lg:mx-auto">
      {props.children}
    </section>
  );
};

export default CardMain;
