import React from 'react';
import {
  SkeletonContainer, Text,
} from './style';

function SkeletonLine({ classes }) {
  return (
    <SkeletonContainer role="status">
      <Text className={classes} />
    </SkeletonContainer>

  );
}

export default SkeletonLine;
