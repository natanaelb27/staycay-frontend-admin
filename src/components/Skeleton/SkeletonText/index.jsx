import React from 'react';
import {
  SkeletonContainer, Text,
} from './style';

function SkeletonText({ classes }) {
  return (
    <SkeletonContainer role="status" className={classes}>
      <Text className="title" />
      <Text className="content" />
      <Text className="content" />
      <Text className="content" />
    </SkeletonContainer>

  );
}

export default SkeletonText;
