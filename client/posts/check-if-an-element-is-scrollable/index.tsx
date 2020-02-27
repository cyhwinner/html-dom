import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
The following function returns \`true\` if the \`ele\` element is scrollable.

~~~ javascript
const isScrollable = function(ele) {
    // Compare the height to see if the element has scrollable content
    const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

    // It's not enough because the element's \`overflow-y\` style can be set as
    // * \`hidden\`
    // * \`hidden !important\`
    // In those cases, the scrollbar isn't shown
    const overflowYStyle = window.getComputedStyle(ele).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowHidden;
};
~~~

## Might be useful

* [Get css styles of an element](/get-css-styles-of-an-element)
`}
/>
    );
};
