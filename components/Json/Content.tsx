import React, { ChangeEvent } from 'react'
import Editor, { OnChange } from '@monaco-editor/react'

type JsonContentProps = {
  json: string
  onJsonChange: OnChange
  tsInterface: string
}

const JsonContent: React.FC<JsonContentProps> = ({
  json,
  onJsonChange,
  tsInterface,
}) => {
  return (
    <>
      <Editor
        height="250px"
        defaultValue={json}
        defaultLanguage="json"
        theme="vs-dark"
        onChange={onJsonChange}
        value={json}
        options={{
          tabSize: 2,
          fontSize: 16,
          padding: {
            top: 16
          }
        }}

      />
      <div className="my-4" />
      <Editor
        height="250px"
        value={tsInterface}
        defaultLanguage="typescript"
        theme="vs-dark"
        options={{
          tabSize: 2,
          fontSize: 16,
          readOnly: true,
          padding: {
            top: 16
          }
        }}
      />
    </>
  )
}

export default JsonContent
