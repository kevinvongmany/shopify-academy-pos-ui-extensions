import React from 'react'

import { Text, Screen, ScrollView, Navigator, useApi, reactExtension } from '@shopify/ui-extensions-react/point-of-sale'

const Modal = () => {
  const api = useApi('pos.home.modal.render');
  
  const onButtonPress = (type, title, amount) => {
    api.cart.applyCartDiscount(type, title, amount);
    api.toast.show("Discount applied successfully!");
  }
  
  return (
    <Navigator>
      <Screen name="Discounts" title="Available Discounts!">
        <ScrollView>
          <Text>Welcome to the extension!</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => <Modal />);