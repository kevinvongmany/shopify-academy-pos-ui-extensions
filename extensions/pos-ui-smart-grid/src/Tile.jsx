import React, {useState} from 'react'

import { Tile, reactExtension, useApi } from '@shopify/ui-extensions-react/point-of-sale'

const TARGET = 'pos.home.tile.render';

const TileComponent = () => {
  const api = useApi(TARGET);

  const shouldEnable = (subtotal) => {
    return Number(subtotal) > 100;
  }

  const [enabled, setEnabled] = useState(
    shouldEnable(api.cart.subscribable.initial.subtotal)
  );

  api.cart.subscribable.subscribe((cart) => {
    setEnabled(shouldEnable(cart.subtotal));
  });

  return (
    <Tile
      title="Loyalty Discounts"
      subtitle="Set discounts"
      onPress={api.action.presentModal}
      enabled={enabled}
    />
  )
}

export default reactExtension(TARGET, () => {
  return <TileComponent />
})