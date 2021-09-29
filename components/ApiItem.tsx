import React from 'react'
import {
  Input,
  InputGroup,
  Select,
} from '@components/Bootstrap'
import { Method } from 'types/method'
import Editor from '@monaco-editor/react'
import Option from './Option'

type ApiItemComponentProps = {
  url?: string
  method?: Method
  json?: string;
  tsInterface?: string
  typeName?: string
}

const ApiItemComponent: React.FC<ApiItemComponentProps> = ({
  url,
  method,
  json,
  tsInterface,
  typeName
}) => {
  return (
    <div className="p-4">
      <InputGroup className="mb-4">
        <Select className="flex-grow-0 w-auto" disabled defaultValue={method}>
          <Option value="GET">GET</Option>
          <Option value="POST">POST</Option>
          <Option value="PUT">PUT</Option>
          <Option value="PATCH">PATCH</Option>
          <Option value="DELETE">DELETE</Option>
        </Select>
        <Input
          type="url"
          readOnly
          value={url}
        />
      </InputGroup>
      <h1 className="mb-3">{typeName}</h1>
      <Editor
        height="250px"
        defaultValue={json}
        defaultLanguage="json"
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
    </div>
  )
}

export default ApiItemComponent
