import React from 'react'
import { Accordion } from '@components/Bootstrap'
import { ApiItem } from 'types/api-item'
import ApiItemComponent from './ApiItem'

type ApiListComponentProps = {
  apiList: ApiItem[]
}

const ApiListComponent: React.FC<ApiListComponentProps> = ({ apiList }) => {

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
        />
      )}
    </Accordion>
  )
}

export default ApiListComponent
