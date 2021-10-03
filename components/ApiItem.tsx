import React, {
  useState,
  ButtonHTMLAttributes
} from 'react'
import styled from '@emotion/styled'
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
import { ApiItem } from 'types/api-item'
import ApiUpdateFormComponent from './ApiUpdateForm'

type ApiItemComponentProps = {
  eventKey: string
  requestOrResponse: 'Request' | 'Response'
  method: Method
  json: string;
  tsInterface: string
  typeName: string
  onRemove: (id: string) => void,
  onUpdate: (updatedApiForm: ApiItem) => void
}

const ApiItemComponent: React.FC<ApiItemComponentProps> = ({
  eventKey,
  requestOrResponse,
  method,
  json,
  tsInterface,
  typeName,
  onRemove,
  onUpdate,
}) => {
  const [isUpdated, setIsUpdated] = useState(false)

  const handleUpdateClick = () => {
    setIsUpdated(true)
    onUpdate({
      id: eventKey,
      requestOrResponse,
      method,
      json,
      tsInterface,
      typeName,
    })
  }

  const renderCodeView = (
    <>
      <Code language="json" code={json} />
      <div className="my-4" />
      <Code language="typescript" code={tsInterface} />
      <Button variant="update" onClick={handleUpdateClick}>수정</Button>
      <Button variant="delete" onClick={() => onRemove(eventKey)}>삭제</Button>
    </>
  )

  const renderCodeEditor = (
    <ApiUpdateFormComponent
      id={eventKey}
      previousJson={json}
      previousMethod={method}
      previousRequestOrResponse={requestOrResponse}
      previousTsInterface={tsInterface}
      previousTypeName={typeName}
      onApiUpdate={onUpdate}
      onUpdateClick={setIsUpdated}
    />
  )

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
              <Option value="Response">Response</Option>
              <Option value="Request">Payload</Option>
            </Select>
          </InputGroup>
        </Accordion.Header>
        <Accordion.Body className="p-3 border rounded">
          {isUpdated ? renderCodeEditor : renderCodeView}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  )
}

const titleStyle = css`
  font-size: 24px;
  font-weight: 700;
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'update' | 'delete'
}

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  padding: 0.375rem 1rem;
  margin-right: 0.5rem;
  color: #ffffff;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "update":
        return `#f4a236`
      case "delete":
        return `#f44336`
      default:
        return
    }
  }};
  &:hover {
    background-color: ${({ variant }) => {
    switch (variant) {
      case "update":
        return `#f4a236cf`
      case "delete":
        return `#f44336cf`
      default:
        return
    }
  }};
  }
`

export default ApiItemComponent
