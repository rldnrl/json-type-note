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

type ApiItemComponentProps = {
  eventKey: string
  requestOrResponse?: 'Request' | 'Response'
  method?: Method
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
  const setOptionMethodColor = () => {
    switch (method) {
      case 'GET':
        return 'bg-primary text-white'
      case 'POST':
        return 'bg-success text-white'
      case 'PUT':
        return 'bg-warning text-white'
      case 'DELETE':
        return 'bg-danger text-white'
      case 'PATCH':
        return 'bg-danger text-white'
      default:
        return
    }
  }

  return (
    <>
      <div className="p-4">
        <h1 className={titleStyle}>{typeName}</h1>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Header className="fs-2">
            <InputGroup className="flex-grow-0 w-auto">
              <Select className={cx("flex-grow-0 w-auto", setOptionMethodColor())} disabled defaultValue={method}>
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
    </>
  )
}

const titleStyle = css`
  font-size: 24px;
  font-weight: 700;
`

const getStyle = css`
  background-color: #61affe;
  color: #ffffff
`

const postStyle = css`
  background-color: #49cc90;
  color: #ffffff
`

const putStyle = css`
  background-color: #fca130;
  color: #ffffff
`

const deleteStyle = css`
  background-color: #f93e3e;
  color: #ffffff
`

export default ApiItemComponent
