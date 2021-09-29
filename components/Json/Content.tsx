import React, { ChangeEvent } from 'react'
import Editor, { OnChange } from '@monaco-editor/react'
import { Input } from '@components/Bootstrap'

type JsonContentProps = {
  typeName: string
  onTypeNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  json: string
  onJsonChange: OnChange
  tsInterface: string
}

const JsonContent: React.FC<JsonContentProps> = ({
  typeName,
  onTypeNameChange,
  json,
  onJsonChange,
  tsInterface,
}) => {
  return (
    <>
      <Input
        className="mb-3"
        required
        type="text"
        value={typeName}
        onChange={onTypeNameChange}
        placeholder="Type Name"
      />
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
