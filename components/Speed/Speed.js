
import React, {useState, setState} from "react";
import { SpeedDial } from 'react-native-elements';

const Speed =({navigation}) => {
const [open, setOpen] = React.useState(false);
return (
  <SpeedDial
    isOpen={open}
    icon={{ name: 'add', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
  >
    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Cadastrar Motoboy"
      onPress={() => navigation.navigate('Motoboy')}
    />
    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Cadastrar Cliente"
      onPress={() => navigation.navigate('Cliente')}
    />

  </SpeedDial>
);
};

export default Speed;