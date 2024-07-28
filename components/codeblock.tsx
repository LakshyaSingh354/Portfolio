"use client";

import React, { use, useEffect } from 'react';
import Prism from 'prismjs';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  useEffect(() => {
    Prism.highlightAll(); // This is needed to highlight the code
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;