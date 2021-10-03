import React, {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FormEvent
} from 'react'
import {
  Button,
  Input,
  InputGroup,
  Select,
} from '@components/Bootstrap'
import Option from './Option'
import { Method } from 'types/method'
import { JsonContent } from './Json'
import styled from '@emotion/styled'
import useJsonToTs from 'hooks/useJsonToTs'
import { isString } from 'utils/type-guard'
import { ApiItem } from 'types/api-item'

type ApiUpdateFormComponentProps = {
  id: string
  previousJson: string
  previousTsInterface: string
  previousMethod: Method
  previousRequestOrResponse: 'Request' | 'Response'
  previousTypeName: string
  onApiUpdate: (apiForm: ApiItem) => void
  onUpdateClick: Dispatch<SetStateAction<boolean>>
}

const ApiUpdateFormComponent: React.FC<ApiUpdateFormComponentProps> = ({
  id,
  previousJson,
  previousTsInterface,
  previousMethod,
  previousRequestOrResponse,
  previousTypeName,
  onApiUpdate,
  onUpdateClick
}) => {
  const [method, setMethod] = useState<Method>(previousMethod)
  const [requestOrResponse, setRequestOrResponse] = useState<'Request' | 'Response'>(previousRequestOrResponse)
  const [typeName, setTypeName] = useState(previousTypeName)

  const { json, setJson, tsInterface } = useJsonToTs(previousTypeName, JSON.parse(previousJson), previousTsInterface)

  const onMethodChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMethod(e.target.value as Method)
  }

  const onRequestOrResponseChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRequestOrResponse(e.target.value as 'Request' | 'Response')
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onApiUpdate({
      id,
      method,
      requestOrResponse,
      typeName,
      json,
      tsInterface
    })
    onUpdateClick(false)
  }

  return (
    <div className="p-4">
      <form onSubmit={onSubmit}>
        <InputGroup className="mb-4">
          <Select className="flex-grow-0 w-auto" defaultValue={method} onChange={onMethodChange}>
            <Option value="GET">GET</Option>
            <Option value="POST">POST</Option>
            <Option value="PUT">PUT</Option>
            <Option value="PATCH">PATCH</Option>
            <Option value="DELETE">DELETE</Option>
          </Select>
          <Input
            required
            type="text"
            value={typeName}
            onChange={(e) => setTypeName(e.target.value)}
            placeholder="Please enter type name..."
          />
          <Button type="submit">Update</Button>
        </InputGroup>
        <JsonContainer>
          <div className="pb-3">
            <Select className="flex-grow-0 w-auto" defaultValue={requestOrResponse} onChange={onRequestOrResponseChange}>
              <Option value="Response">Response</Option>
              <Option value="Request">Payload</Option>
            </Select>
          </div>
          <JsonContent
            json={json}
            onJsonChange={(value) => {
              if (isString(value)) {
                setJson(value)
              }
            }}
            tsInterface={tsInterface}
          />
        </JsonContainer>
      </form>
    </div>
  )
}

const JsonContainer = styled.div`
  padding: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
`

export default ApiUpdateFormComponent
