import stylex from '@stylexjs/stylex';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/off-road/')({
  component: OffRoad,
});

const styles = stylex.create({
  base: {},
});

function OffRoad() {
  return (
    <div {...stylex.props(styles.base)}>
      <h3>Off Road!</h3>
    </div>
  );
}
