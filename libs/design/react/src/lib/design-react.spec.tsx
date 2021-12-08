import { render } from '@testing-library/react';

import DesignReact from './design-react';

describe('DesignReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignReact />);
    expect(baseElement).toBeTruthy();
  });
});
