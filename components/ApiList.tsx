import React from 'react'
import { Accordion } from '@components/Bootstrap'
import { ApiItem } from 'types/api-item'
import ApiItemComponent from './ApiItem'

type ApiListComponentProps = {
  apiList: ApiItem[]
  onRemove: (id: string) => void
}

const ApiListComponent: React.FC<ApiListComponentProps> = ({ apiList, onRemove }) => {
  return (
    <Accordion>
      {apiList.map(({
        id,
        method,
        requestOrResponse,
        json,
        tsInterface,
        typeName
      }) =>
        <ApiItemComponent
          key={id}
          eventKey={id}
          requestOrResponse={requestOrResponse}
          method={method}
          json={json}
          tsInterface={tsInterface}
          typeName={typeName}
          onRemove={onRemove}
        />
      )}
    </Accordion>
  )
}

export default ApiListComponent
