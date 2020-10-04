import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
  width: 100%;
  height: 144px;
  position: relative;
  margin-bottom: -125px;

  div {
    display: flex;
    height: 100%;
    margin-left: 10%;
    align-items: center;
    justify-content: left;

    svg {
      color: #999591;
      width: 24px;
      height: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    transition: background-color 0.3s;

    input {
      display: none;
    }

    svg {
      color: #312e38;
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }
  }
`;
