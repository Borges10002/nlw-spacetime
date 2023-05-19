const styles = {
  color: "#F00",
};

interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps) {
  return <p style={styles}>{props.title}</p>;
}
