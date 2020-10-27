import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Indicator from '.';

const SELECTOR_NOTIF = '[aria-label="Notification indicator"]';
const SELECTOR_COUNT = '[aria-label="Count indicator"]';

describe('Indicator component', () => {

  it('renders correctly as notif with label', () => {
    const { container } = render(<Indicator label="666" />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    const count = container.querySelector(SELECTOR_COUNT);
    expect(count).toBeFalsy();
    expect(notif).toBeTruthy();
    expect(notif).toHaveClass('color--white');
    expect(notif).toHaveClass('bgColor--red');
    expect(notif).not.toHaveClass('color--aqua');
    expect(notif).not.toHaveClass('bgColor--aqua');
  });

  it('renders correctly as notif without label', () => {
    const { container } = render(<Indicator />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    const count = container.querySelector(SELECTOR_COUNT);
    expect(count).toBeFalsy();
    expect(notif).toBeTruthy();
    expect(notif).toHaveClass('color--white');
    expect(notif).toHaveClass('bgColor--red');
    expect(notif).toHaveClass('shape--circle');
    expect(notif).toHaveClass('fds-indicator--dot');
    expect(notif).toHaveClass('color--white');
    expect(notif).not.toHaveClass('color--aqua');
    expect(notif).not.toHaveClass('bgColor--aqua');
  });

  it('renders correctly as count with label', () => {
    const { container } = render(<Indicator label="666" type="count" />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    const count = container.querySelector(SELECTOR_COUNT);
    expect(notif).toBeFalsy();
    expect(count).toBeTruthy();
    expect(count).toHaveClass('color--aqua');
    expect(count).not.toHaveClass('color--white');
    expect(count).not.toHaveClass('bgColor--red');
    expect(count).not.toHaveClass('shape--circle');
  });

  it('renders correctly as count without label', () => {
    const { container } = render(<Indicator type="count" />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    const count = container.querySelector(SELECTOR_COUNT);
    expect(notif).toBeFalsy();
    expect(count).toBeTruthy();
    expect(count).toHaveClass('color--aqua');
    expect(count).toHaveClass('bgColor--aqua');
    expect(count).toHaveClass('shape--circle');
    expect(count).toHaveClass('fds-indicator--dot');
    expect(count).toHaveClass('color--white');
    expect(count).not.toHaveClass('bgColor--red');
  });

});
