import styled, { css } from 'styled-components';

const palette = {
  default: {
    bgColor: 'primary',
    color: 'white',
  },
  disabled: {
    bgColor: 'secondary',
    color: 'white',
  },
  active: {
    bgColor: 'white',
    color: 'txtColor',
    borderColor: 'gray',
    hoverbgColor: 'primary',
  },
};

const colorStyles = css`
  ${({ theme, mode }) => {
    const { colors } = theme;
    const backgroundColor = colors[palette[mode].bgColor];
    const color = colors[palette[mode].color];
    const borderColor = colors[palette[mode].borderColor];
    const hoverbgColor = colors[palette[mode].hoverbgColor];

    if (borderColor) {
      return css`
        background-color: ${backgroundColor};
        color: ${color};
        border: 1px solid ${borderColor};
        transition: 0.3s;
        &:hover {
          color: ${backgroundColor};
          background-color: ${hoverbgColor};
        }
      `;
    }

    return css`
      background-color: ${backgroundColor};
      color: ${color};
    `;
  }}
`;

const sizes = {
  lg: {
    fontSize: '14px',
    height: '44px',
    radius: '44px',
  },
  md: {
    fontSize: '14px',
    height: '34px',
    radius: '30px',
  },
  ms: {
    fontSize: '14px',
    height: '32px',
    radius: '32px',
  },
  sm: {
    fontSize: '12px',
    height: '28px',
    radius: '26px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
    height: ${sizes[size].height};
    border-radius: ${sizes[size].radius};
  `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  font-weight: 500;
  width: 100%;

  /* 색상 */
  ${colorStyles}

  /* 폰트 크기, 높이, border-radius */
  ${sizeStyles}
`;

const Button = ({ mode, size, children, ...props }) => {
  return (
    <StyledButton mode={mode} size={size} disabled={mode === 'disabled'} {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  mode: 'default',
  size: 'md',
};

export default Button;
