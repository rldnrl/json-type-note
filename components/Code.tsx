import React, { useState } from 'react'
import { css } from '@emotion/css'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { FaRegCopy, FaRegClipboard } from 'react-icons/fa'
import styled from '@emotion/styled';

type CodeProps = {
  language: 'json' | 'typescript'
  code: string
}

const Code: React.FC<CodeProps> = ({ language, code }) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div className={divContainerStyle}>
      <div className={copyButtonContainerStyle}>
        <CopyToClipboard text={code} onCopy={() => setIsCopied(true)}>
          {isCopied ? <FaRegClipboard /> : <FaRegCopy />}
        </CopyToClipboard>
      </div>
      <CustomSyntaxHighlighter language={language} style={atomDark}>
        {code}
      </CustomSyntaxHighlighter>
    </div>
  );
}

const divContainerStyle = css`
  position: relative;
`

const copyButtonContainerStyle = css`
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 14px;
  color: white;
  font-size: 24px;
`

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  height: 250px;
`

export default Code;