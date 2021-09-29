import React from 'react'
import { ApiItem } from 'types/api-item'
import ApiItemComponent from './ApiItem'

type ApiListComponentProps = {
  apiList: ApiItem[]
}

const ApiListComponent: React.FC<ApiListComponentProps> = ({ apiList }) => {

  return (
    <>
      {apiList.map(({ id, url, method, json, tsInterface, typeName }) =>
        <ApiItemComponent
          key={id}
          url={url}
          method={method}
          json={json}
          tsInterface={tsInterface}
          typeName={typeName}
        />
      )}
    </>
  )
}

export default ApiListComponent
