import React from 'react'

import { Text, Screen, ScrollView, Navigator, Button, useApi, reactExtension } from '@shopify/ui-extensions-react/point-of-sale'

const TARGET = 'pos.home.modal.render';

const Modal = () => {
  const api = useApi(TARGET);

  const onButtonPress = (type, title, amount) => {
    api.cart.applyCartDiscount(type, title, amount);
    api.toast.show("Discount applied successfully!");
  };

  return (
    <Navigator>
      <Screen name="Discounts" title="Available Discounts!">
        <ScrollView>
          <Button 
            title="25%" 
            onPress={() => onButtonPress("Percentage", "25% Off", "25")} />
          <Button 
            title="$10" 
            onPress={() => onButtonPress("FixedAmount", "$10 Off", "10")} />
        </ScrollView>
      </Screen>
    </Navigator>
  )
}

export default reactExtension(TARGET, () => <Modal />);