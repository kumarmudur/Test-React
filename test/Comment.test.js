import React from 'react';
import Comment  from '../src/components/Comment';

describe('a passing test', () => {
    it('should pass', () => {
      expect(true).to.be.true;
    });
});

describe('Comment item', () => {
    it('should be a list item', () => {
      const wrapper = shallow(<Comment />);
      expect(wrapper.type()).to.eql('li');
    });
});


