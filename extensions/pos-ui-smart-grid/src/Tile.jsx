import React, {useState} from 'react'

import { Tile, reactExtension, useApi } from '@shopify/ui-extensions-react/point-of-sale'

const TileComponent = () => {
  const api = useApi()

  const shouldEnable = (subtotal) => {
    return Number(subtotal) > 100;
  }

  const [enabled, setEnabled] = useState(
    shouldEnable(api.cart.subscribable.initial.subtotal)
  );

  return (
    <Tile
      title="Discount Example App"
      subtitle="SmartGrid react Extension"
      onPress={() => {
        api.action.presentModal()
      }}
      enabled
    />
  )
}

export default reactExtension('pos.home.tile.render', () => {
  return <TileComponent />
})