import React from 'react'
import {
  InputGroup,
  Select,
} from '@components/Bootstrap'
import { Method } from 'types/method'
import Editor from '@monaco-editor/react'
import Option from './Option'
import Code from './Code'

type ApiItemComponentProps = {
  method?: Method
  json: string;
  tsInterface: string
  typeName?: string
}

const ApiItemComponent: React.FC<ApiItemComponentProps> = ({
  method,
  json,
  tsInterface,
  typeName
}) => {
  return (
    <div className="p-4">
      <div className="p-3 border rounded">
        <InputGroup className="mb-4">
          <Select className="flex-grow-0 w-auto" disabled defaultValue={method}>
            <Option value="GET">GET</Option>
            <Option value="POST">POST</Option>
            <Option value="PUT">PUT</Option>
            <Option value="PATCH">PATCH</Option>
            <Option value="DELETE">DELETE</Option>
          </Select>
        </InputGroup>
        <h1 className="mb-3 fs-2">{typeName}</h1>
        <Code language="json" code={json} />
        <div className="my-4" />
        <Code language="typescript" code={tsInterface} />
      </div>
    </div>
  )
}

export default ApiItemComponent
