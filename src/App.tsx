import { Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';

function Demo() {
  return (
    <Button component="a" href="#" variant="outline" leftIcon={<IconExternalLink size={14} />}>
      Open in new tab
    </Button>
  );
}