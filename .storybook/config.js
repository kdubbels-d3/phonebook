import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/stories/index.js');
  require('../src/components/stories/TableRow.story.js');
  require('../src/components/stories/Td.story.js');
  require('../src/components/stories/Th.story.js');
  require('../src/components/stories/Table.story.js');
  require('../src/components/stories/Input.story.js');
  require('../src/components/stories/Form.story.js');
}


configure(loadStories, module);
