import React from 'react'
import {
  InputGroup,
  Select,
} from '@components/Bootstrap'
import { Method } from 'types/method'
import Option from './Option'
import Code from './Code'

type ApiItemComponentProps = {
  requestOrResponse?: 'Request' | 'Response'
  method?: Method
  json: string;
  tsInterface: string
  typeName?: string
}

const ApiItemComponent: React.FC<ApiItemComponentProps> = ({
  requestOrResponse,
  method,
  json,
  tsInterface,
  typeName
}) => {
  return (
    <div className="p-4">
      <div className="p-3 border rounded">
        <h1 className="mb-3 fs-2">{typeName}</h1>
        <InputGroup className="mb-4">
          <Select className="flex-grow-0 w-auto" disabled defaultValue={method}>
            <Option value="GET">GET</Option>
            <Option value="POST">POST</Option>
            <Option value="PUT">PUT</Option>
            <Option value="PATCH">PATCH</Option>
            <Option value="DELETE">DELETE</Option>
          </Select>
          <Select className="flex-grow-0 w-auto" disabled defaultValue={requestOrResponse}>
            <Option value="Response">Response JSON</Option>
            <Option value="Request">Payload JSON</Option>
          </Select>
        </InputGroup>
        <Code language="json" code={json} />
        <div className="my-4" />
        <Code language="typescript" code={tsInterface} />
      </div>
    </div>
  )
}

export default ApiItemComponent
