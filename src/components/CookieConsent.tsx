import React from "react";

const F: React.FC = () => (
  <p>
    This website uses cookies. By continuing to use our site, you agree to our
    use of cookies.
  </p>
);

interface Props {
  readonly showWarning: boolean;
}

const cookieName = "accepted-cookies";

const Comp: React.FC = () => {
  const [state, setState] = React.useState<Props>({ showWarning: false });
  React.useEffect(() => {
    const hasCookie =
      document.cookie
        .split(";")
        .filter(item => item.indexOf(`${cookieName}=`) >= 0).length > 0;
    if (!hasCookie) {
      document.cookie = `${cookieName}=1`;
    }
    setState({ showWarning: !hasCookie });
  }, []);
  return state.showWarning ? <F /> : null;
};

export default Comp;
