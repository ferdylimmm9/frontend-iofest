import * as React from 'react';
import { CSS, styled } from 'styles';

interface Props {
  direction?: 'horizontal' | 'vertical' | 'both';
  gap: number;
  children?: React.ReactNode;
  css?: CSS;
}

export default function Separator(props: Props) {
  const { direction, gap: _gap, children, css } = props;
  const gap = React.useMemo(() => {
    const temp = children ? _gap : (_gap - 2) / 2;
    switch (direction) {
      case 'horizontal':
        return { marginLeft: temp, marginRight: temp };

      case 'vertical':
        return { marginTop: temp, marginBottom: temp };

      default:
        return { margin: temp };
    }
  }, [_gap, children, direction]);
  return (
    <Container css={{ ...css, ...gap }}>
      {children || <div style={{ width: 2, height: 2 }} />}
    </Container>
  );
}
export const Container = styled('div', {});
