import React from 'react'
import {
  Accordion,
  InputGroup,
  Select,
} from '@components/Bootstrap'
import { Method } from 'types/method'
import Option from './Option'
import Code from './Code'
import { css, cx } from '@emotion/css'
import setOptionMethodColor from 'utils/setOptionColor'

type ApiItemComponentProps = {
  eventKey: string
  requestOrResponse?: 'Request' | 'Response'
  method: Method
  json: string;
  tsInterface: string
  typeName?: string
}

const ApiItemComponent: React.FC<ApiItemComponentProps> = ({
  eventKey,
  requestOrResponse,
  method,
  json,
  tsInterface,
  typeName
}) => {
  return (
    <div className="p-4">
      <h1 className={titleStyle}>{typeName}</h1>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header className="fs-2">
          <InputGroup className="flex-grow-0 w-auto">
            <Select
              className={cx("flex-grow-0 w-auto", setOptionMethodColor(method))}
              disabled
              defaultValue={method}
            >
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
        </Accordion.Header>
        <Accordion.Body className="p-3 border rounded">
          <Code language="json" code={json} />
          <div className="my-4" />
          <Code language="typescript" code={tsInterface} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  )
}

const titleStyle = css`
  font-size: 24px;
  font-weight: 700;
`

export default ApiItemComponent
