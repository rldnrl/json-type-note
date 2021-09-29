import React, {
  useState,
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
import { ApiForm } from 'types/api-form'

type ApiFormComponentProps = {
  onApiAdd: (apiForm: ApiForm) => void
}

const ApiFormComponent: React.FC<ApiFormComponentProps> = ({ onApiAdd }) => {
  const [method, setMethod] = useState<Method>('GET')
  const [url, setUrl] = useState('')
  const [typeName, setTypeName] = useState('')
  const { json, setJson, tsInterface, resetJson } = useJsonToTs(typeName)

  const reset = () => {
    setMethod('GET')
    setUrl('')
    setTypeName('')
    resetJson()
  }

  const onMethodChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMethod(e.target.value as Method)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onApiAdd({ method, url, typeName, json, tsInterface })
    reset()
  }

  return (
    <div className="p-4">
      <form onSubmit={onSubmit}>
        <InputGroup className="mb-4">
          <Select className="flex-grow-0 w-auto" onChange={onMethodChange}>
            <Option value="GET" defaultValue={method}>GET</Option>
            <Option value="POST">POST</Option>
            <Option value="PUT">PUT</Option>
            <Option value="PATCH">PATCH</Option>
            <Option value="DELETE">DELETE</Option>
          </Select>
          <Input
            required
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
          />
          <Button type="submit">Save</Button>
        </InputGroup>
        <JsonContainer>
          <JsonContent
            json={json}
            onJsonChange={(value) => {
              if (isString(value)) {
                setJson(value)
              }
            }}
            tsInterface={tsInterface}
            typeName={typeName}
            onTypeNameChange={(e) => setTypeName(e.target.value)}
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

export default ApiFormComponent
